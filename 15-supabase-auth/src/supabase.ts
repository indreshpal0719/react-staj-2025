import { createClient } from "@supabase/supabase-js";
// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://nydpxwykjhuksepyzfnm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55ZHB4d3lramh1a3NlcHl6Zm5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyODA5MjAsImV4cCI6MjA3MDg1NjkyMH0.cpmLejouPiaPaXvZwbrBjvlWxHa904TuAJRfK52cX9o"
);
