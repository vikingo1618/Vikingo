import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy} from "@angular/core";
import { LoginService } from "../services/login.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit, OnDestroy {
    
    user: string;
    password: string;

    constructor(private _loginService: LoginService, private _loginRouter: Router){
        
    }
    ngOnInit(){  
             
    }

    ngOnDestroy(){        
    }

    verifyLogin(){
        var inputData=this._loginService.setLogin(this.user,this.password);
        if (inputData==true)
        {
            this._loginRouter.navigate(['']);
        } else{
          window.alert('ERROR:User not found')
        }  

    }
    

}
