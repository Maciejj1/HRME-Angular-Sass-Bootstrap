import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AccountComponent} from "./pages/account/account.component";
import {CandidatesComponent} from "./pages/candidates/candidates.component";
import {AddCandidateComponent} from "./pages/add-candidate/add-candidate.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [

  {path: '' ,redirectTo: 'welcome' , pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},

  {path:'welcome', component: WelcomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'candidates' , component: CandidatesComponent},
  {path: 'addcandidate' , component: AddCandidateComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'home' , component: HomeComponent},
  {path: '**' , component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
