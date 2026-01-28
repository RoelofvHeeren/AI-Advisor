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
create index on document_chunks using ivfflat (embedding vector_cosine_ops)
with (lists = 100);

-- Function to search for document chunks similar to a query embedding
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
