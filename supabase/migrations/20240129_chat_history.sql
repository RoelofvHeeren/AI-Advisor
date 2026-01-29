-- Enable pgvector if not done
create extension if not exists vector;

-- 1. Chat Sessions Table
-- Can be single-advisor chat or multi-advisor (mastermind)
create table if not exists chat_sessions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text default 'New Conversation',
  is_mastermind boolean default false,
  last_message_at timestamp with time zone default timezone('utc'::text, now())
);

-- 2. Chat Messages Table
create table if not exists chat_messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  session_id uuid references chat_sessions(id) on delete cascade not null,
  role text not null, -- 'user' or 'assistant'
  content text not null,
  metadata jsonb
);

-- 3. Chat Session Advisors (Junction for Masterminds)
create table if not exists chat_session_advisors (
  session_id uuid references chat_sessions(id) on delete cascade not null,
  advisor_id uuid references advisors(id) on delete cascade not null,
  primary key (session_id, advisor_id)
);

-- 4. Enable RLS (Optional but safe)
alter table chat_sessions enable row level security;
alter table chat_messages enable row level security;
alter table chat_session_advisors enable row level security;

-- Simple policies for now (allow all authenticated if we had auth, but since we are dev, allow all)
create policy "Allow all sessions" on chat_sessions for all using (true);
create policy "Allow all messages" on chat_messages for all using (true);
create policy "Allow all session_advisors" on chat_session_advisors for all using (true);

-- Indexes
create index if not exists idx_chat_messages_session on chat_messages(session_id);
create index if not exists idx_chat_sessions_last_msg on chat_sessions(last_message_at desc);
