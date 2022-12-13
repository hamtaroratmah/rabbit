import {Services} from "../services/services";

export class RegisterController {

  constructor() {
  }

  private service = new Services();


  public async register(pseudo: string, email: string, password: string, confirmationPassword: string) {
    if (password !== confirmationPassword) console.log("passwords are not the same");
    await this.service.register(pseudo, email, password);
  }

}