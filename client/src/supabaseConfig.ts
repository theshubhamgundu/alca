import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://wfugiuojwqykcjscutki.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmdWdpdW9qd3F5a2Nqc2N1dGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3NDM3MDcsImV4cCI6MjEwNTMxOTcwN30.IsqN00-C3Nhyg69QucIGCbQB9vF0CQEKtOn47P-cT5A';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

