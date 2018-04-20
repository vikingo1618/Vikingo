import { Injectable } from '@angular/core';

@Injectable()

export class LoginService {

  userData:string = 'BecaJava18';
  passwordData:string='axity2018';

  setLogin(user: string, password: string){
    var validate:boolean;

    if(this.userData===user && this.passwordData===password)
    {
     return validate=true;
    }
  }
}