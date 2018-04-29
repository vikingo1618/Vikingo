import { Injectable } from '@angular/core';

@Injectable()

export class LoginService {
  name:string= 'vik';
  userData:string = 'vik123';
  passwordData:string='vik1234';
  realemail:string ="vik@gmail.com";

  setLogin(realname:string,user: string, password: string, passcon:string,email:string, read:boolean){
    var validate:boolean;

    //Regex Javascipt
    if(this.name=== realname && this.userData===user && this.passwordData===password
         && this.passwordData===passcon && this.realemail===email && read===true)
    {
     return validate=true;
    }
    //return validate=false;
  }
}