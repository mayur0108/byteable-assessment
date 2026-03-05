import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials missing. Please provide VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
}

export const supabase = createClient(
  supabaseUrl || 'https://zjpojzoeuruzrckhjocm.supabase.co/',
  supabaseAnonKey || 'sb_publishable_fO4s5rOQcv1NW3QG3YpJ2Q_Ivf-ITlI'
);
