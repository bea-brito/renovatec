const {
  REACT_APP_SUPABASE_URL,
  REACT_APP_SUPABASE_ANON_KEY,
} = require("./env");
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  REACT_APP_SUPABASE_URL,
  REACT_APP_SUPABASE_ANON_KEY
);
module.exports = supabase;
