-- 1. Add advisor_id to document_chunks
ALTER TABLE document_chunks ADD COLUMN advisor_id uuid REFERENCES advisors(id) ON DELETE CASCADE;

-- 2. Backfill advisor_id from documents table
-- This maps all ~28,000 existing chunks to their correct advisor directly
UPDATE document_chunks
SET advisor_id = documents.advisor_id
FROM documents
WHERE document_chunks.document_id = documents.id;

-- 3. Make advisor_id NOT NULL for future inserts to ensure data integrity
ALTER TABLE document_chunks ALTER COLUMN advisor_id SET NOT NULL;

-- 4. Create an index on advisor_id to speed up filtering before vector search
CREATE INDEX idx_document_chunks_advisor_id ON document_chunks(advisor_id);

-- 5. Update the RPC function to remove the slow JOIN
CREATE OR REPLACE FUNCTION match_document_chunks (
  query_embedding vector(1536),
  match_threshold float,
  match_count int,
  filter_advisor_id uuid
)
RETURNS TABLE (
  id uuid,
  content text,
  metadata jsonb,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    dc.id,
    dc.content,
    dc.metadata,
    1 - (dc.embedding <=> query_embedding) AS similarity
  FROM document_chunks dc
  -- NO MORE JOIN WITH documents! It filters directly on the indexed chunk column.
  WHERE 1 - (dc.embedding <=> query_embedding) > match_threshold
  AND dc.advisor_id = filter_advisor_id
  ORDER BY similarity DESC
  LIMIT match_count;
END;
$$;
