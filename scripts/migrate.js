const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

async function migrate() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables');
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const migrationPath = path.join(__dirname, '../supabase/migrations/20240129_chat_history.sql');
  const sql = fs.readFileSync(migrationPath, 'utf8');

  console.log('Running migration...');
  const { error } = await supabase.rpc('exec_sql', { sql_query: sql });

  if (error) {
    if (error.message.includes('exec_sql')) {
      console.error('RPC exec_sql not found. You need to enable it in Supabase SQL Editor first:');
      console.log(`
CREATE OR REPLACE FUNCTION exec_sql(sql_query text)
RETURNS void AS $$
BEGIN
  EXECUTE sql_query;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
            `);
    } else {
      console.error('Migration error:', error.message);
    }
  } else {
    console.log('Migration successful!');
  }
}

migrate();
