import{MATERIAL_COMPONENTS} from "./app.module";
import {FormsModule} from "@angular/forms";

import { AppComponent, routes} from "./app.component"
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF} from "@angular/common";
import { APP_PROVIDERS } from './app.providers';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GitHubComponent } from './git-hub-card/git-hub-card.component';
import {SearchUserComponent  } from "./search-user/search-user.component";
import { ReactivoComponent } from './reactivo/reactivo.component';
import { PasivoComponent } from './pasivo/pasivo.component';
import { LoginComponent } from "./login-screen/login.component";
import { ScreenComponent } from "./login/screen.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MATERIAL_COMPONENTS,
                AppRoutingModule,
                RouterModule,
                RouterModule.forRoot(routes),
                BrowserAnimationsModule,
                FormsModule],
      declarations: [    AppComponent,
                         MainComponent,
                         AboutComponent,
                        ContactComponent,
                        GitHubComponent,
                        SearchUserComponent,
                        ReactivoComponent,
                        PasivoComponent,
                        LoginComponent,
                        ScreenComponent],
      providers: [{provide : APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it ('prueba',() =>{
    let texto = 'Victor';
    expect (texto).toEqual('Victor');
  })

  it('should render title in a mat-toolbar tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Menu');
  }));
});
