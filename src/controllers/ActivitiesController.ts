import {Services} from "../services/services";

export class ActivitiesController {
  constructor() {
  }

  private service = new Services();


  public async getAllActivities() {
    const response = await this.service.getAllActivities()
    return response;
  }

  public async getMyActivities(idUser:string) {
    console.log("controller : my activities");
    const response = await this.service.getMyActivities(idUser);
    return response;
  }

  public async getActivity(idUser:string , id_activity:string) {
    const response = await this.service.getActivity(idUser,id_activity);
    return response;
  }
}