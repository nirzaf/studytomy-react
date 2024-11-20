create table public.consent_preferences (
  id uuid default uuid_generate_v4() primary key,
  ip_address text not null,
  marketing_consent boolean default false,
  analytics_consent boolean default false,
  functional_consent boolean default false,
  consent_date timestamp with time zone default now(),
  last_updated timestamp with time zone default now()
);

-- Create index on ip_address for faster lookups
create index idx_consent_preferences_ip on consent_preferences(ip_address);

-- Enable RLS
alter table public.consent_preferences enable row level security;

-- Create policy for anonymous access
create policy "Anyone can view and update consent preferences"
  on public.consent_preferences for all
  using (true)
  with check (true); 