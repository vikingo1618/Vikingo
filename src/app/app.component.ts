import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from "./login-screen/login.component";
import { ScreenComponent } from "./login/screen.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'; 
}

export const routes: Routes = [
  { 
    path: '', 
    component: MainComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'contact', 
    component: ContactComponent 
  },
  { 
    path: 'login', 
    component: ScreenComponent 
  }
];
