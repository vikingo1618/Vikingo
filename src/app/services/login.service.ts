import { Injectable } from '@angular/core';

@Injectable()

export class LoginService {

  userData:string = 'vikingo1618';
  passwordData:string='java1234';

  setLogin(user: string, password: string){
    var validate:boolean;

    if(this.userData===user && this.passwordData===password)
    {
     return validate=true;
    }
  }
}