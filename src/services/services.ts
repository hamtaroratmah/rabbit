import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
// @ts-ignore
import { SUPABASE_CLIENT_KEY } from '@env';

export class Services {

  private readonly url = "https://etefnzdgrjqcafqbztoy.supabase.co";
  private readonly token = SUPABASE_CLIENT_KEY as string;
  private readonly supabase = createClient("https://etefnzdgrjqcafqbztoy.supabase.co", this.token);

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
    return response;
  }

}
