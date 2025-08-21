-- 1) products tablosu
create table public.products (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  price numeric(12,2) not null default 0,
  created_at timestamp with time zone not null default now()
);

-- Performans için index
create index products_user_id_idx on public.products(user_id);

-- 2) RLS aç
alter table public.products enable row level security;

-- 3) Politikalar
-- Kendi kayıtlarını görebilsin
create policy "Users can read their own products"
on public.products
for select
using (auth.uid() = user_id);

-- Kendi adına kayıt ekleyebilsin (client user_id'yi göndermek zorunda)
create policy "Users can insert their own products"
on public.products
for insert
with check (auth.uid() = user_id);

-- Kendi kayıtlarını güncelleyebilsin
create policy "Users can update their own products"
on public.products
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- Kendi kayıtlarını silebilsin
create policy "Users can delete their own products"
on public.products
for delete
using (auth.uid() = user_id);