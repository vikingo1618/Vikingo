import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms"

import { APP_PROVIDERS } from "../app.providers"
import { GitHubComponent } from './git-hub-card.component';
import { GitHubModel } from '../model/git-hub-model';

describe('GitHubComponent', () => {
  let component: GitHubComponent;
  let fixture: ComponentFixture<GitHubComponent>;
  let gitHubData : GitHubModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubComponent ],
      imports: [ FormsModule ],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    gitHubData = new GitHubModel();
    gitHubData.avatar_url = '';
    gitHubData.login = 'vikingo1618';
    gitHubData.name = 'Victor Leal';
    gitHubData.followers = 0;
    gitHubData.following = 0;

    fixture = TestBed.createComponent(GitHubComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('shold validate model', () => {
    component.gitHubData = gitHubData;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  })

  it('shold validate model in the view', () => {
    component.gitHubData = gitHubData;
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('#name').textContent)
                   .toContain(`Nombre: ${gitHubData.name}`);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
