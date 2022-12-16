import { Services } from '../services/services';
import { customAlphabet } from 'nanoid';

export class ChallengesController {

  private nanoid: any;

  constructor() {

  }

  private service = new Services();

  public async getAllChallenges() {
    const response = await this.service.getAllChallenges();
    return response;
  }

  public async createChallenge(title: string, description: string, start: Date, end: Date,
                               objectif: number, private_: boolean, id_activity: string, idCreator:string) {
    const response = await this.service.createChallenge(title, description, start, end, objectif, private_, id_activity, idCreator);
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

  public async joinChallenge(id_challenge:any , idUser:any ){
    const chat = await this.service.getChat(id_challenge);
    console.log("chat",chat);
    
    if(chat){
      const response = await this.service.joinChallenge(id_challenge,idUser,"5c45e2af-7360-425d-873d-78955762aa63")
      return response
    }
  }
  
}