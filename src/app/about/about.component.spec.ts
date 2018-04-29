import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import{ HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MATERIAL_COMPONENTS} from "../app.module";

import { GitHubComponent } from '../git-hub-card/git-hub-card.component';
import {APP_PROVIDERS} from "../app.providers";
import { AboutComponent } from './about.component';


describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent,
                      GitHubComponent ],
      imports: [MATERIAL_COMPONENTS,
                HttpClientModule,
                BrowserAnimationsModule],
      providers: [APP_PROVIDERS],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
