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
		if (challenges === null) return challenges;
		const {data: creator, error: errorUsername} = await supabase
		.from('profiles')
		.select('username')
		.eq('id', challenges[0].id_creator)
		challenges[0].creator = creator ? creator[0].username : "un inconnu";
		if (errorChallenges || errorUsername) {
			return null
		} else {
			return challenges
		}
	}

	public async createChallenge(title: string, description: string, start: Date, end: Date,
	                             objectif: number, private_: boolean, id_activity: string,
	                             code: string) {
		const {data: challenge, error: errorChallenge} = await supabase
		.from('challenges')
		.insert({
			title: title,
			description: description,
			start: start,
			end: end,
			objectif: objectif,
			private: private_,
			code: code,
			id_activity: id_activity,
		})
		.select();
		console.log(challenge);
	}

}