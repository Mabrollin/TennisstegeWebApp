import { NgModule }      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Navbar, StartNavbar, UserNavbar } from './navbar';
import { Login } from './login';
import { Logout } from './logout';
import { Ladder } from './ladder';
import { Home } from './home.component';
import { BallCanvas } from './background';
import { Profile, ContactInfoPanel } from './profile';
import { Signup } from './signup';
import { LoginOptions } from './login';
import { LadderPlayer } from "./ladder";
import { InputField } from "./input";
import { UserSessionService } from "./_services/usersessionservice";
import { AuthGuard } from './auth/authguard';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from "./_services/authInterceptor.service";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';



export const appRoutes: Routes = [
  { path: '',component: LoginOptions},
  { path: 'home', component: Home},
  { path: 'ladders', component: Ladder},
  { path: 'profile', canActivate: [AuthGuard], component: Profile},
  // { path: 'home',   component: Home, children:[
  //   { path: '**',  component: LoginOptions}
  // ]},

  { path: 'login', component: Login, data:{animation : "Login"}  },
  { path: 'logout', component: Logout},
  { path: 'options',  component: LoginOptions, data:{animation : "Options"}  },
  { path: 'loginoptions',  component: LoginOptions, data:{animation : "Options"}  },
  { path: 'signup',  component: Signup, data:{animation : "Signup"}  }
  // { path: 'login',   component: Home, children:[
  //   { path: '**',  component: Login, data:{animation : "Login"}  }
  // ]},
  // { path: 'signup',   component: Home, children:[
  //   { path: '**', component: Signup, data:{animation : "signup"}}
  // ]}
];


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, HttpClientModule, FormsModule, BrowserAnimationsModule ],
  exports:      [ RouterModule],
  declarations: [ AppComponent, Navbar, StartNavbar, UserNavbar, Ladder, LadderPlayer, Home, Login, Logout, Signup, Profile, BallCanvas, LoginOptions, InputField, ContactInfoPanel],
  providers:    [ UserSessionService, AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    } ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
