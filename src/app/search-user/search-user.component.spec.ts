import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms"

import { APP_PROVIDERS } from "../app.providers"
import { SearchUserComponent } from '../search-user/search-user.component';

describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchUserComponent],
      imports: [ FormsModule ],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSearchClick', () => {
    component.userName = 'vikingo1618';
    component.onSearchUser.subscribe( x => {
      expect(x).toEqual('vikingo1618');
    });
    component.onSearchClick();
  });

  it('should call onSearchClick in view', () => {
    component.userName = 'vikingo1618';
    component.onSearchUser.subscribe( x => {
      expect(x).toEqual('vikingo1618');
    });
    let compiled = fixture.nativeElement;
    compiled.querySelector('button').click();
  });
});
