import {Services} from "../services/services";

export class ChallengesController {

  constructor() {
  }

  private service = new Services();

  public async getAllChallenges() {
    const response = await this.service.getAllChallenges()
    return response;
  }

  public async getMyChallenges(idUser:string) {
    const response = await this.service.getMyChallenges(idUser)
    return response;
  }

  public async getMyChallenge(id_challenge:string , idUser:string){
    const response = await this.service.getMyChallenge(id_challenge,idUser)
    return response;
  }

  public async updateYES(id_challenge:string , idUser:string ,nbrYes:any){
    const response = await this.service.updateYES(id_challenge,idUser,nbrYes)
    return response;
  }

  public async updateNo(id_challenge:string , idUser:string ,nbrNo:any){
    const response = await this.service.updateNo(id_challenge,idUser,nbrNo)
    return response;
  }

  public async getStats(id_challenge:string , idUser:string ){
    const response = await this.service.getStats(id_challenge,idUser)
    return response;
  }

  
}