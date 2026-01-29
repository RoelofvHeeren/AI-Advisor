-- API Keys Table for Chrome Extension
create table if not exists api_keys (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id uuid references auth.users(id) on delete cascade,
  key text unique not null,
  name text default 'Extension Key',
  is_active boolean default true,
  last_used_at timestamp with time zone
);

-- Index for faster lookups
create index if not exists api_keys_key_idx on api_keys(key);
create index if not exists api_keys_user_id_idx on api_keys(user_id);

-- RLS Policies
alter table api_keys enable row level security;

create policy "Users can view their own API keys"
  on api_keys for select
  using (auth.uid() = user_id);

create policy "Users can create their own API keys"
  on api_keys for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own API keys"
  on api_keys for update
  using (auth.uid() = user_id);

create policy "Users can delete their own API keys"
  on api_keys for delete
  using (auth.uid() = user_id);
