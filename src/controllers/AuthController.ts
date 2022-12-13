import {Services} from "../services/services";

export class AuthController {

  constructor() {
  }

  private service = new Services();


  public async register(pseudo: string, email: string, password: string, confirmationPassword: string) {
    if(pseudo===null || email=== null || password === null || confirmationPassword===null) throw new Error("All fields must be filled");
    if (password !== confirmationPassword) console.log("passwords are not the same");
      const res = await this.service.register(pseudo, email, password);
    return res.error===null;
  }

  public async login(email:string, password:string){
    if(email === null || password === null)throw new Error("All fields must be filled");
    const response = await this.service.login(email, password);
    return response.error===null;
  }

}