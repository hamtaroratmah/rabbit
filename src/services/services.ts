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

}