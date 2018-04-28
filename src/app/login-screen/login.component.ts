import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy} from "@angular/core";
import { LoginService } from "../services/login.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit, OnDestroy {
    realname: string;
    user: string;
    password: string;
    passConfirm: string;
    mail: string;
    response: boolean;
    constructor(private _loginService: LoginService, public _loginRouter: Router){
        
    }
    ngOnInit(){  
             
    }

    ngOnDestroy(){        
    }

    verifyLogin(){
        this.response = this._loginService.setLogin(this.realname,this.user,this.password,this.passConfirm,this.mail);

    }
    

}