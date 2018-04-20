import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';
import { GitHubModel } from '../model/git-hub-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  //gitHubData: GitHubModel;
  gitHubDataList: Array<GitHubModel>;

  constructor(private _gitHubService : GitHubService) { 
    
    this.gitHubDataList = new Array<GitHubModel>();

  }

  ngOnInit() {


  }

  onSearchUser(userName : string){

    this._gitHubService
    .getUserInfo(userName)
    .subscribe(x => {
      //this.gitHubData = new GitHubModel();
      this.gitHubDataList.push(x);
    });

  }

  deleteCard(obj:GitHubModel){
    console.log(obj);
    this.gitHubDataList=this.gitHubDataList.filter(x=>x!=obj);

  }

}
