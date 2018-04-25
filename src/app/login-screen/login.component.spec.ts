import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { AppComponent, routes } from '../app.component';
import { APP_PROVIDERS } from "../app.providers"
import { LoginComponent } from '../login-screen/login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent, AppComponent, routes],
        imports: [ FormsModule ],
        providers: [APP_PROVIDERS]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
  
    it('should call verifyLogin', () => {
       component.user = 'vikingo1618';
       component.password = 'axity123';
      component.verifyLogin();
      expect(component.response).toBe(true);
    });
  
  });
  