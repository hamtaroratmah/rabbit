import {Services} from "../services/services";



export class AuthController {

	constructor() {
	}

	private service = new Services();


	public async register(pseudo: string, email: string, password: string, confirmationPassword: string) {
		if (pseudo === null || email === null || password === null || confirmationPassword === null) throw new Error("All fields must be filled");
		if (password !== confirmationPassword) console.log("passwords are not the same");
		return await this.service.register(pseudo, email, password);
	}

	public async login(email: string, password: string) {
		if (email === null || password === null) throw new Error("All fields must be filled");
		return await this.service.login(email, password);
	}

	public async loginWithGoogle() {
		const response = await this.service.loginWithGoogle();
		return response.error === null;
	}

	public async getUser(idUser:string) {
		const response = await this.service.getUser(idUser);
		return response;
	}

}