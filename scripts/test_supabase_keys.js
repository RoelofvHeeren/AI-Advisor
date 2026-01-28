
const { createClient } = require('@supabase/supabase-js');

async function testConnection() {
    const supabaseUrl = 'https://pswawtzjjponbudedzft.supabase.co';
    // Legacy JWT Key provided by user
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzd2F3dHpqanBvbmJ1ZGVkemZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NzAxNDgsImV4cCI6MjA4NTE0NjE0OH0.7td6PUaifabSbFxWDHMrjeSO-pqNj7bvQ6MIslUZWZo';

    console.log('Testing connection with Legacy JWT Key...');
    console.log('URL:', supabaseUrl);
    // console.log('Key:', supabaseKey); // Don't log full key for security

    try {
        const supabase = createClient(supabaseUrl, supabaseKey);

        // Try a simple query
        const { data, error } = await supabase.from('advisors').select('count', { count: 'exact', head: true });

        if (error) {
            console.error('Connection failed:', error);
            console.error('Error details:', JSON.stringify(error, null, 2));
        } else {
            console.log('Connection successful!');
            console.log('Data (Advisors count check):', data);
        }
    } catch (e) {
        console.error('Client initialization or execution failed:', e);
    }
}

testConnection();
