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
                               objectif: number, private_: boolean, id_activity: string, session: {}) {
    const idCreator = session.user.id
    const response = await this.service.createChallenge(title, description, start, end, objectif, private_, id_activity, idCreator);
    return response;
  }

}