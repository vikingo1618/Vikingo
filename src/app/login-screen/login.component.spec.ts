import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MATERIAL_COMPONENTS } from "../app.module";
import { NgModule } from '@angular/core';

import { APP_PROVIDERS } from '../app.providers';
import { PasivoComponent } from '../pasivo/pasivo.component';
import { ReactivoComponent } from '../reactivo/reactivo.component';
import { LoginComponent } from '../login-screen/login.component';
import { RouterModule } from '@angular/router';
import {routes } from '../app.component';
import { MainComponent } from '../main/main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ScreenComponent } from "../login/screen.component";
import { SearchUserComponent } from '../search-user/search-user.component';
import { GitHubComponent } from "../git-hub-card/git-hub-card.component";
import { APP_BASE_HREF } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent,
        PasivoComponent,
        ReactivoComponent,
        MainComponent,
        AboutComponent,
        ContactComponent,
        LoginComponent,
        ScreenComponent,
        SearchUserComponent,
        GitHubComponent],
      imports:[FormsModule,
        MATERIAL_COMPONENTS,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule],
      providers:[APP_PROVIDERS,
        {provide:APP_BASE_HREF,useValue:'/'}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  //Validates component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Validates successful login
  it('should validate login redirection to Main',()=>{
    component.realname='vik'
    component.user='vik123';
    component.password='vik1234';
    component.passConfirm='vik1234';
    component.mail= 'vik@gmail.com';

    component.verifyLogin();
    
    expect(component.response).toBe(true);
  });

    //Validates the passwords entered by user match
    it('should validate matching password',()=>{
      component.realname='vik'
      component.user='vik123';
      component.password='vik1234';
      component.passConfirm='vik1234';
      component.mail= 'vik@gmail.com';
  
      component.verifyLogin();
      
      expect(component.passResponse).toBe(true);
    });
//Regex


});

  