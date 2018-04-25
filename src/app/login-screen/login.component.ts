import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy} from "@angular/core";
import { LoginService } from "../services/login.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit, OnDestroy {
    
    response: boolean;
    user: string;
    password: string;

    constructor(private _loginService: LoginService, private _loginRouter: Router){
        
    }
    ngOnInit(){  
             
    }

    ngOnDestroy(){        
    }

    verifyLogin(){
        let inputData=this._loginService.setLogin(this.user,this.password);
        this.response= inputData;
        if (inputData==true)
        {
            this._loginRouter.navigate(['']);
        } else{
          window.alert('ERROR:User not found')
        }  

    }
    

}
