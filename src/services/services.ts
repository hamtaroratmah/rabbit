import 'react-native-url-polyfill/auto';
import supabase from "../utils/Client";
import {Context as SessionContext} from '../contexts/SessionContext';
import { useContext } from 'react';

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
		if (challenges === null) return challenges;
		for (let index = 0; index<= challenges.length-1; index++) {
			const {data: creator, error: errorUsername} = await supabase
			.from('profiles')
			.select('username')
			.eq('id', challenges[index].id_creator)
			challenges[index].creator = creator ? creator[0].username : "un inconnu";
			if(errorUsername) return errorUsername;
		}

		if (errorChallenges) {
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


	

	public async createChallenge(title: string, description: string, start: Date, end: Date,
	                             objective: number, private_: boolean, id_activity: string, idCreator: string) {
		const {data: challenge, error: errorChallenge} = await supabase
		.from('challenges')
		.insert({
			id_creator: idCreator,
			title: title,
			description: description,
			start: start,
			end: end,
			objective: objective,
			private: private_,
			id_activity: id_activity,
		})
		.select();
		let idChallenge, codeChallenge;
		if (challenge) {
			idChallenge = challenge[0].id;
			codeChallenge = challenge[0].code;
		}
		await this.createChat(idChallenge, codeChallenge, idCreator);
		return [challenge, errorChallenge]
	}

	private async createChat(idChallenge: string, codeChallenge: string, idCreator: string){
		const {data: chat, error: errorChat} = await supabase
		.from('chats')
		.insert({
			id_challenge: idChallenge,
			code: codeChallenge
		})
		.select();
		let chatId;
		if (chat) {
			chatId = chat[0].id;
		}
		await this.createParticipator(idChallenge, idCreator, chatId);
	}

	private async createParticipator(idChallenge: string, profileId: string, chatId: string){
		const {data: participator, error: errorParticipator} = await supabase
		.from('participators')
		.insert({
			challenge_id: idChallenge,
			profile_id: profileId,
			chat_id: chatId
		})
		.select();
	}

}