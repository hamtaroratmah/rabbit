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
		const {data, error} = await supabase
		.from('challenges')
		.select('*')
		console.log(data)
		if (error) {
			return null
		} else {
			return data
		}
	}

}