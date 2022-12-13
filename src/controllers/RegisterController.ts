export class RegisterController{

  constructor() {
  }


  public register(pseudo: string, email: string, password : string, confirmationPassword: string){
  console.log(pseudo, email, password, confirmationPassword);
}

}