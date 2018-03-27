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
import { Ladder, LadderList, AddLadder, PlayerCard } from './ladder';
import { Home } from './home.component';
import { BallCanvas } from './background';
import { Profile, ContactInfoPanel, AboutProfilePanel, LadderProfilePanel } from './profile';
import { Signup } from './signup';
import { CreateLadder } from './createladder';
import { LoginOptions } from './login';
import { InputField, SelectField} from "./input";
import { AuthGuard } from './auth/authguard';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';



export const appRoutes: Routes = [
  { path: 'test', component: CreateLadder },
  { path: '', component: LoginOptions },
  { path: 'home', component: Profile },
  { path: 'ladders', component: LadderList, data: { animation: "Ladders" } },
  { path: 'ladder/new', component: CreateLadder, data: { animation: "NewLadder" } },
  { path: 'ladder/add', component: AddLadder, data: { animation: "AddLadder" } },
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
  declarations: [AppComponent, Navbar, StartNavbar, UserNavbar, Ladder, AddLadder, LadderList, Home, Login, Logout, Signup, CreateLadder, Profile, BallCanvas, NewChallengePopup, GameScore, PlayerCard, ScoringTable, LoginOptions, InputField, SelectField, ContactInfoPanel,  AboutProfilePanel, LadderProfilePanel],
  providers: [UserSessionService, ShadowService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
