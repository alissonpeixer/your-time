import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.SUPABASE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

