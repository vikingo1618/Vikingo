import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms"

import { APP_PROVIDERS } from "../app.providers"
import { GitHubComponent } from './git-hub-card.component';
import { GitHubModel } from '../model/git-hub-model';
import { SearchUserComponent } from '../search-user/search-user.component';

describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;
  //let gitHubData : GitHubModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubComponent ],
      imports: [ FormsModule ],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    /*gitHubData = new GitHubModel();
    gitHubData.avatar_url = '';
    gitHubData.login = 'vikingo1618';
    gitHubData.name = 'Victor Leal';
    gitHubData.followers = 0;
    gitHubData.following = 0;*/

    fixture = TestBed.createComponent(SearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
