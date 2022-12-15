import {Services} from "../services/services";

export class ChallengesController {

  constructor() {
  }

  private service = new Services();


  public async getAllChallenges() {
    const response = await this.service.getAllChallenges()
    return response;
  }
}