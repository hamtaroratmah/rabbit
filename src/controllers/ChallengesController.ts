import {Services} from "../services/services";

export class ChallengesController {

  constructor() {
  }

  private service = new Services();


  public async getAllChallenges() {
    const response = await this.service.getAllChallenges()
    return response;
  }

  public async login(email:string, password:string){
    if(email === null || password === null)throw new Error("All fields must be filled");
    const response = await this.service.login(email, password);
    return response.error!==null;
  }

  public async loginWithGoogle(){
    const response = await this.service.loginWithGoogle();
    return response.error!==null;
  }

}