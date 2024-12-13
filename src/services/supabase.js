import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vvbchxrqwkdkokfzycyi.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2YmNoeHJxd2tka29rZnp5Y3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NjcxNjgsImV4cCI6MjA0OTM0MzE2OH0.1HMstlzsJDghJuNMlnCDQzgn6VZ38Ud_TzfBii1Zxpo";

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
