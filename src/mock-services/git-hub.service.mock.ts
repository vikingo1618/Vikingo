import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../app/model/git-hub-model";

const _getUsersUrl = 'https://api.github.com/users'
@Injectable()

export class GitHubServiceMock{

 
    getUserInfo(userName: string){
        let gitHubObj = new GitHubModel();
        gitHubObj.avatar_url = '';
        gitHubObj.login = 'vikingo1618';
        gitHubObj.name = 'Victor Leal';
        gitHubObj.followers = 0;
        gitHubObj.following = 0;

        return Observable
                        .of(gitHubObj)
                        .catch(this.handleError);

    }
    handleError(error : any){
        console.log(`Error: ${error}`);
        return Observable.throw(error.json() || 'Server Error' );
    }
} 