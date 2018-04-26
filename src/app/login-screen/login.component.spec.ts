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
  it('should validate login rediretion to Main',()=>{

    component.user='vikingo1618';
    component.password='java1234';

    let navigateSPY=spyOn(component._loginRouter,'navigate');

    component.verifyLogin();
    
    expect(navigateSPY).toHaveBeenCalledWith(['']);
  });

  //Validates unsuccessful login
  it('should validate invalid login alert',()=>{

    component.user='vikingo618';
    component.password='java1234';

    let alertSPY=spyOn(window,'alert');

    component.verifyLogin();
    
    expect(alertSPY).toHaveBeenCalledWith('ERROR:User not found');
  });

  //Validates unsuccesful login on view
  it('should validate invalid login alert on wiew',()=>{

    component.user='vikingo618';
    component.password='java1234';

    let alertSpy = spyOn(window,'alert');
    let compiled = fixture.nativeElement.querySelector('button').click();
    
    expect(alertSpy).toHaveBeenCalledWith('ERROR:User not found');
  });
 //Validates successful login on view
  it('should validate valid login redirection to Main on wiew',()=>{

    component.user='vikingo1618';
    component.password='java1234';

    let navSpy = spyOn(component._loginRouter,'navigate');
    let compiled = fixture.nativeElement.querySelector('button').click();
    
    expect(navSpy).toHaveBeenCalledWith(['']);
  });

});

  