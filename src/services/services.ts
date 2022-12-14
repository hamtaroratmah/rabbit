import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
// @ts-ignore
import {SUPABASE_CLIENT_KEY} from '@env';
import { Platform } from 'react-native';

export class Services {

  private readonly url = "https://etefnzdgrjqcafqbztoy.supabase.co";
  private readonly token = SUPABASE_CLIENT_KEY as string;
  private readonly supabase = createClient(this.url, this.token ,
    {
      realtime: {
        params: {
          eventsPerSecond: 10,
        },
      },
    } 
  );

  // Channel name can be any string.
// Create channels with the same name for both the broadcasting and receiving clients.


// Subscribe registers your client with the server


  public async register(username: string, email: string, password: string) {
    return await this.supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username,
        }
      }
    });
  }

  public async login(email: string, password: string){
    return await this.supabase.auth.signInWithPassword({
      email: email,
      password: password
    });
  }

  public async loginWithGoogle() {
    return await this.supabase.auth.signInWithOAuth({
      provider: 'google'
    });
  }

  public async getAllChallenges(){
     const {data,error} = await this.supabase
    .from('challenges')
    .select('*')
    if(error){
      return null
    }else{
      return data
    }
  }
}
