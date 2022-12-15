import {createClient} from "@supabase/supabase-js";
// @ts-ignore
import {SUPABASE_CLIENT_KEY} from '@env';

const url = "https://etefnzdgrjqcafqbztoy.supabase.co";
const token = SUPABASE_CLIENT_KEY;
const supabase = createClient(url, token);

export default supabase;