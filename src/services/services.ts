import {createClient} from '@supabase/supabase-js';

export class Services {

  private supabaseUrl = "https://etefnzdgrjqcafqbztoy.supabase.co";
  private token = process.env.token as string;
  private supabase = createClient(this.supabaseUrl, this.token);

  public async register(username: string, email: string, password: string) {
    const response = await this.supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
        }
      }
    });
    console.log(response);
  }

}
