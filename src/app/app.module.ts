import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { AddCandidateComponent } from './pages/add-candidate/add-candidate.component';
import { AccountComponent } from './pages/account/account.component';
import { NavComponent } from './pages/nav/nav.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    CandidatesComponent,
    AddCandidateComponent,
    AccountComponent,
    NavComponent,
    SideBarComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    WelcomeComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    CandidatesComponent,
    AddCandidateComponent,
    AccountComponent,
    NavComponent,
    SideBarComponent,
]
})
export class AppModule { }
