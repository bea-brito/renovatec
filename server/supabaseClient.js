const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://alqpreifzqbsjktldcqd.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFscXByZWlmenFic2prdGxkY3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMzcwMDgsImV4cCI6MjAyNjcxMzAwOH0.HAE9HVZkGSc0gYqn-OqnAlR9PmxsyUnfAhO3lr8_nTI";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
module.exports = supabase;
