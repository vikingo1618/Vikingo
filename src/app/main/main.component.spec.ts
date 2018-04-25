import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import{MATERIAL_COMPONENTS} from "../app.module";
import{ HttpClientModule} from "@angular/common/http";

import { APP_PROVIDERS } from '../app.providers';
import { GitHubComponent } from '../git-hub-card/git-hub-card.component';
import {SearchUserComponent  } from "../search-user/search-user.component";
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent,
                      SearchUserComponent,
                      GitHubComponent
                       ],
      imports: [FormsModule,
                MATERIAL_COMPONENTS,
                HttpClientModule],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
