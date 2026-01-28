const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const dbPassword = process.argv[2];

if (!dbPassword) {
    console.error('Please provide the database password as an argument.');
    process.exit(1);
}

const connectionString = `postgresql://postgres:${dbPassword}@db.pswawtzjjponbudedzft.supabase.co:5432/postgres`;

const client = new Client({
    connectionString: connectionString,
});

const schemaSql = `
-- Enable the pgvector extension to work with embedding vectors
create extension if not exists vector;

-- Advisors Table
create table if not exists advisors (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  description text,
  system_prompt text not null,
  avatar_url text
);

-- Documents Table
create table if not exists documents (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  advisor_id uuid references advisors(id) on delete cascade not null,
  title text not null,
  source_url text, -- can be null if uploaded file
  content_type text not null -- 'pdf', 'url', 'text'
);

-- Document Chunks Table (for RAG)
create table if not exists document_chunks (
  id uuid default gen_random_uuid() primary key,
  document_id uuid references documents(id) on delete cascade not null,
  content text not null,
  metadata jsonb,
  embedding vector(1536)
);

-- Create index for faster semantic search
-- We use a conditional block because 'create index if not exists' is not standard in all postgres versions for custom indexes like ivfflat
do $$
begin
  if not exists (
    select 1
    from pg_class c
    join pg_namespace n on n.oid = c.relnamespace
    where c.relname = 'document_chunks_embedding_idx'
  ) then
    create index document_chunks_embedding_idx on document_chunks using ivfflat (embedding vector_cosine_ops)
    with (lists = 100);
  end if;
end $$;

-- Search Function
create or replace function match_document_chunks (
  query_embedding vector(1536),
  match_threshold float,
  match_count int,
  filter_advisor_id uuid
)
returns table (
  id uuid,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    document_chunks.id,
    document_chunks.content,
    document_chunks.metadata,
    1 - (document_chunks.embedding <=> query_embedding) as similarity
  from document_chunks
  join documents on documents.id = document_chunks.document_id
  where 1 - (document_chunks.embedding <=> query_embedding) > match_threshold
  and documents.advisor_id = filter_advisor_id
  order by similarity desc
  limit match_count;
end;
$$;
`;

async function runMigration() {
    try {
        console.log('Connecting to database...');
        await client.connect();
        console.log('Connected. Running schema...');

        await client.query(schemaSql);

        console.log('Schema setup complete!');
    } catch (err) {
        console.error('Migration failed:', err);
    } finally {
        await client.end();
    }
}

runMigration();
