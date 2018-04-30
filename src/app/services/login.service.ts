import { Injectable } from '@angular/core';

@Injectable()

export class LoginService {
  name:string= 'Victor';
  userData:string = 'vikingo333';
  passwordData:string='Vikingo1234';
  realemail:string ="vik@gmail.com";
  check:boolean = true;

  setLogin(realname:string,user: string, password: string, passcon:string,email:string,read:boolean){
    var validate:boolean;

    //Regex Javascipt
    if(this.name=== realname && this.userData===user && this.passwordData===password
         && this.passwordData===passcon && this.realemail===email && this.check === read)
    {
     return validate=true;
    }
    //return validate=false;
  }
}