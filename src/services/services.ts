import 'react-native-url-polyfill/auto';
import supabase from "../utils/Client";

export class Services {


	public async register(username: string, email: string, password: string) {
		const {data, error} = await supabase.auth.signUp({
			email: email,
			password: password,
			options: {
				data: {
					username: username,
				}
			}
		});
		return {data, error};
	}

	public async login(email: string, password: string) {
		const {data, error} = await supabase.auth.signInWithPassword({
			email: email,
			password: password
		});
		return {data, error};
	}

	public async loginWithGoogle() {
		return await supabase.auth.signInWithOAuth({
			provider: 'google'
		});
	}

	public async getAllChallenges() {
		const {data: challenges, error: errorChallenges} = await supabase
		.from('challenges')
		.select('*');
		const {data: creator, error: errorUsername} = await supabase
			.from('profiles')
			.select('username')
			.eq('id', challenges[0].id_creator)
		challenges[0].creator=creator[0].username
		if (errorChallenges || errorUsername) {
			return null
		} else {
			return challenges
		}
	}

    public async getAllActivities(){
      let { data, error, status } = await supabase
        .from('activities')
        .select(`
          id,
          title,
          description
        `)
        if (error && status !== 406) {
          throw error
        }if (data) {
          return data
        }
    }

    public async getMyActivities(idUser:string){
      let { data, error, status } = await supabase
        .from('users_activities')
        .select(`
          id_activity,
          activities(
            id,
            title,
            description
          )
        `).eq('id_profile',idUser)
        if (error && status !== 406) {
          throw error
        }if (data) {
          return data
        }
    }

    public async getMyChallenges(idUser:string){
      let { data, error, status } = await supabase
        .from('participators')
        .select(`
          challenge_id,
          challenges(
            id,
            title,
            description
          )
        `).eq('profile_id',idUser)
        
        if (error && status !== 406) {
          throw error
        }if (data) {
          return data
        }
    }

    public async getMyChallenge(id_challenge:string , idUser:string){
      let { data, error, status } = await supabase
        .from('participators')
        .select(`
          challenge_id,
          challenges(
            id,
            title,
            description,
            objective
          )
        `).eq('profile_id',idUser)
        .eq('challenge_id',id_challenge)
        if (error && status !== 406) {
          throw error
        }if (data) {
          return data
        }
    }

    public async getActivity(idUser:string,id_activity:string , ){
      let { data, error, status } = await supabase
        .from('users_activities')
        .select(`
          id_activity,
          activities(
            id,
            title,
            description,
            mesure
          )
        `).eq('id_profile',idUser)
        .eq('id_activity',id_activity)
        if (error && status !== 406) {
          throw error
        }if (data) {
          return data
        }
    }

	public async updateYES(id_challenge:string,id_user:string,nbrYES:any){
		let { data, error, status } = await supabase
		.from('participators')
		.update({"yes":nbrYES})
		.eq("challenge_id",{id_challenge})
		.eq("profile_id",{id_user})
		if (error && status !== 406) {
		  throw error
		}if (data) {
		  return data
		}
	  }
  
	  public async updateNo(id_challenge:string,id_user:string,nbrNo:any){
		let { data, error, status } = await supabase
		.from('participators')
		.update({"no":nbrNo})
		.eq("challenge_id",{id_challenge})
		.eq("profile_id",{id_user})
		if (error && status !== 406) {
		  throw error
		}if (data) {
		  return data
		}
	  }

    public async getStats(id_challenge:string, idUser:string){
      let { data, error, status } = await supabase
      .from('participators')
      .select(`
        challenge_id,
        yes,
        no
      `)
      .eq("challenge_id",{id_challenge})
      .eq("profile_id",{idUser})
      if (error && status !== 406) {
        throw error
      }if (data) {
        return data
      }
    }


}