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
    read:boolean;
    response: boolean;
    nameValidation;usernameValidation;emailValidation;passValidation;passMatch:boolean = false;
    constructor(private _loginService: LoginService, public _loginRouter: Router){
        
    }
    ngOnInit(){  
             
    }

    ngOnDestroy(){        
    }

    verifyLogin(){
        //Validates real name has only letters
        (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(this.realname)&&this.realname != null) ? 
                        this.nameValidation = true : alert('Your NAME must contain only letters');
        //Validates username to be 5-15 chars, not start w/ number ans not contain special chars
        (/^[A-Za-z_][A-Za-z0-9_]{4,14}$/.test(this.user)&&this.user != null) ? 
                        this.usernameValidation = true : alert('Invalid USERNAME');
        //Validates password i bigger than 3 chars, and have at least 1 UC, lw and number
        (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,}$/.test(this.password)&&this.password != null) ? 
                        this.passValidation = true : alert('Invalid PASSWORD');

        (this.password == this.passConfirm) ? this.passMatch = true : alert('PASSWORDS DO NOT MATCH');

        (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(this.mail)&&this.mail != null) ? 
                        this.emailValidation = true : alert('Invalid EMAIL');

        (this.nameValidation && this.usernameValidation && this.passValidation
                && this.passMatch && this.emailValidation) ? 
                this.response = this._loginService.setLogin(this.realname,this.user,this.password,this.passConfirm,this.mail,this.read)
                : alert('Something is missing.');

        this.response ? this._loginRouter.navigate(['']) : alert('You shall not pass!');
          
    } 
}
    