import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../model/git-hub-model";

const _getUsersUrl = 'https://api.github.com/users'
@Injectable()

export class GitHubService{

    
    constructor(private _httpClient: HttpClient){

    }

    getUserInfo(userName : string){
    return this._httpClient
            .get(`${_getUsersUrl}/${userName}`,{responseType: 'json'})
            .map((x : any) => {
                let gitHubObj = new GitHubModel();
                gitHubObj.avatar_url = x.avatar_url;
                gitHubObj.login = x.login;
                gitHubObj.name = x.name;
                gitHubObj.followers = x.followers;
                gitHubObj.following = x.following;
                return gitHubObj;
            })
            .catch(this.handleError);
    }
    handleError(error : any){
        console.log(`Error: ${error}`);
        return Observable.throw(error.json() || 'Server Error' );
    }
} 