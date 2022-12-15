import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
// @ts-ignore
//import {SUPABASE_CLIENT_KEY} from '@env';

export class Services {

  private readonly url = "https://etefnzdgrjqcafqbztoy.supabase.co";
  private readonly token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0ZWZuemRncmpxY2FmcWJ6dG95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA0Mjg0NTMsImV4cCI6MTk4NjAwNDQ1M30.1yK2-fVdu3E5YWDZj3eaL1W5GU49MVjTX3GyvNXddmA";
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

    public async login(email: string, password: string) {
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