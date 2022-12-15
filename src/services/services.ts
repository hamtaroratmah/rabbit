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
		const idChallenge = challenge[0].id;
		const codeChallenge = challenge[0].code;
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
		const chatId = chat[0].id;
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