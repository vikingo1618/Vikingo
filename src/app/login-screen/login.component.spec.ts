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
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  //Validates successful login
  it('should validate successful login',()=>{
    component.realname='Victor'
    component.user='vikingo333';
    component.password='Vikingo1234';
    component.passConfirm='Vikingo1234';
    component.mail= 'vik@gmail.com';
    component.read= true;

    component.verifyLogin();
    
    expect(component.response).toBeTruthy();
  });

    //Validates successful login
    it('should validate unsuccessful login due to unchecked box w/valid info',()=>{
      component.realname='Victor'
      component.user='vikingo333';
      component.password='Vikingo1234';
      component.passConfirm='Vikingo1234';
      component.mail= 'vik@gmail.com';
      component.read= false;
  
      component.verifyLogin();
      
      expect(component.response).toBeFalsy();
    });


    //Validates the passwords entered by user match
    it('should validate matching passwords',()=>{
      component.password='Vikingo1234';
      component.passConfirm='Vikingo1234';
      component.verifyLogin();
      
      expect(component.passMatch).toBeTruthy();
    });

    //Validates the passwords entered by user  do NOT match
    it('should validate not matching passwords',()=>{
      component.password='Vikingo1234';
      component.passConfirm='Vikingo124';
      component.verifyLogin();
      
      expect(component.passMatch).toBeFalsy();
    });




    //Validates the password entered
    it('should validate correct input for password field',()=>{
      component.password='Vikingo1234';
      component.verifyLogin();
      
      expect(component.passValidation).toBeTruthy();
    });

    //Validates the password entered by user
    it('should validate incorrect input for password field',()=>{
      component.password='vikingo1234';
      component.verifyLogin();
      
      expect(component.passValidation).toBeFalsy();
    });

    //Validates the real name entered by user
    it('should validate valid real name',()=>{
      component.realname='Victor Manuel';
      component.verifyLogin();
      
      expect(component.nameValidation).toBeTruthy();
    });

    //Validates the real name entered by user is not valid
    it('should validate invalid real name',()=>{
      component.realname='Victor33';
      component.verifyLogin();
      
      expect(component.nameValidation).toBeFalsy();
    });

        //Validates the username entered by user
        it('should validate valid username',()=>{
          component.user='vikingo333';
          component.verifyLogin();
          
          expect(component.usernameValidation).toBeTruthy();
        });
    
        //Validates the real name entered by user is not valid
        it('should validate invalid username',()=>{
          component.user='';
          component.verifyLogin();
          
          expect(component.usernameValidation).toBeFalsy();
        });
        //Validates the email entered by user is valid
        it('should validate valid email',()=>{
          component.mail='zombie.robot33@gmail.com';
          component.verifyLogin();
          
          expect(component.emailValidation).toBeTruthy();
        });
    
        //Validates the email entered by user is not valid
        it('should validate invalid email',()=>{
          component.mail='derp.derp.com';
          component.verifyLogin();
          
          expect(component.emailValidation).toBeFalsy();
        });

});

  