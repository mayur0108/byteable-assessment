-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (Agency Users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  avatar_url TEXT,
  agency_name TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Clients table
CREATE TABLE IF NOT EXISTS clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  industry TEXT,
  website TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Leads/Pipeline table
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_name TEXT NOT NULL,
  deal_name TEXT NOT NULL,
  value DECIMAL(12,2),
  stage TEXT NOT NULL DEFAULT 'discovery', -- discovery, proposal, negotiation, closed
  priority TEXT DEFAULT 'medium',
  client_id UUID REFERENCES clients(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Campaigns table (Analytics data)
CREATE TABLE IF NOT EXISTS campaigns (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_id UUID REFERENCES clients(id),
  name TEXT NOT NULL,
  platform TEXT, -- Facebook, Google, TikTok
  spend DECIMAL(12,2),
  revenue DECIMAL(12,2),
  impressions INTEGER,
  clicks INTEGER,
  start_date DATE,
  end_date DATE,
  status TEXT DEFAULT 'active'
);

-- RLS Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

-- Simple policy: Allow all access for now to unblock development
-- In production, these would be scoped to user_id
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow all access') THEN
        CREATE POLICY "Allow all access" ON profiles FOR ALL USING (true);
        CREATE POLICY "Allow all access" ON clients FOR ALL USING (true);
        CREATE POLICY "Allow all access" ON leads FOR ALL USING (true);
        CREATE POLICY "Allow all access" ON campaigns FOR ALL USING (true);
    END IF;
END $$;

-- Seed some initial data for the dashboard
INSERT INTO clients (name, industry, website) VALUES 
('Aether Tech', 'SaaS', 'https://aether.io'),
('Nova Fashion', 'E-commerce', 'https://novafashion.com');

INSERT INTO leads (company_name, deal_name, value, stage, priority) VALUES 
('Aether Tech', 'Q1 Growth Campaign', 15000, 'discovery', 'high'),
('Nova Fashion', 'Summer Collection Launch', 8500, 'proposal', 'medium'),
('Solaris Energy', 'Brand Awareness', 12000, 'negotiation', 'high');
