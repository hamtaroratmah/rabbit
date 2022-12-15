import {Services} from "../services/services";
import {customAlphabet, nanoid} from "nanoid";

export class ChallengesController {

  private nanoid:any;
	constructor() {
    try {
      this.nanoid = customAlphabet("1234567890abcdef", 5);
    }catch (e:any) {
     throw e.message;
    }
	}

	private service = new Services();

	public async getAllChallenges() {
		const response = await this.service.getAllChallenges()
		return response;
	}

	public async createChallenge(title: string, description: string, start: Date, end: Date,
	                             objectif: number, private_: boolean, id_activity: string) {
    let code;
    try{
      code = nanoid()
    }catch (e:any) {
     throw e.message;
    }
		const response = await this.service.createChallenge(title, description, start, end, objectif, private_, id_activity, code);
		return response;
	}

}