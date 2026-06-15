import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gpznkfpnwlisxkgzvmpv.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdwem5rZnBud2xpc3hrZ3p2bXB2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTQ1NDI2MiwiZXhwIjoyMDk3MDMwMjYyfQ.03pR_RWoY4ZoYw8qJmXhl94ix6vJsT6GMCEKvrQ1FZU";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);