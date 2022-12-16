import {createClient} from "@supabase/supabase-js";
// @ts-ignore
import {SUPABASE_CLIENT_KEY} from '@env';

const url = "https://etefnzdgrjqcafqbztoy.supabase.co";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0ZWZuemRncmpxY2FmcWJ6dG95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA0Mjg0NTMsImV4cCI6MTk4NjAwNDQ1M30.1yK2-fVdu3E5YWDZj3eaL1W5GU49MVjTX3GyvNXddmA";
const supabase = createClient(url, token);

export default supabase;