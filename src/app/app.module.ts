import { NgModule }      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UserSessionService, AuthInterceptor, ShadowService} from "./_services";
import { Navbar, StartNavbar, UserNavbar } from './navbar';
import { Login } from './login';
import { NewChallengePopup, GameScore, ScoringTable } from './challenge';
import { Logout } from './logout';
import { Ladder, LadderList } from './ladder';
import { Home } from './home.component';
import { BallCanvas } from './background';
import { Profile, ContactInfoPanel, AboutProfilePanel, LadderProfilePanel } from './profile';
import { Signup } from './signup';
import { LoginOptions } from './login';
import { InputField } from "./input";
import { AuthGuard } from './auth/authguard';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';



export const appRoutes: Routes = [
  { path: 'test', component: ScoringTable },
  { path: '', component: LoginOptions },
  { path: 'home', component: Profile },
  { path: 'ladders', component: LadderList, data: { animation: "Ladders" } },
  { path: 'ladder/:name', component: Ladder, data: { animation: "Ladder" } },
  { path: 'profile', canActivate: [AuthGuard], component: Profile, data: { animation: "Profile" } },
  { path: 'login', component: Login, data: { animation: "Login" } },
  { path: 'logout', component: Logout },
  { path: 'options', component: LoginOptions, data: { animation: "Options" } },
  { path: 'loginoptions', component: LoginOptions, data: { animation: "Options" } },
  { path: 'signup', component: Signup, data: { animation: "Signup" } }
];


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, HttpClientModule, FormsModule, BrowserAnimationsModule],
  exports: [RouterModule],
  declarations: [AppComponent, Navbar, StartNavbar, UserNavbar, Ladder, LadderList, Home, Login, Logout, Signup, Profile, BallCanvas, NewChallengePopup, GameScore, ScoringTable, LoginOptions, InputField, ContactInfoPanel,  AboutProfilePanel, LadderProfilePanel],
  providers: [UserSessionService, ShadowService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
