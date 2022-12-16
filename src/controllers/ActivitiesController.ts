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

  public async getUserActivity(idUser:string , id_activity:string) {
    const response = await this.service.getUserActivity(idUser,id_activity);
    return response;
  }

  public async startActivity(idUser:string , id_activity:string) {
    const response = await this.service.startActivity(idUser,id_activity);
    return response;
  }

  public async saveDailyUpdate(idUser:string , id_activity:string , goal : any) {
    const response = await this.service.saveDailyUpdate(idUser,id_activity,goal);
    return response;
  }
}