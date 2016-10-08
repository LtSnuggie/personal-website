import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Bio} from './bio/bio';
import {Home} from './home/home';
import {Resume} from './resume/resume';
import {Projects} from './projects/projects';
import {Login} from './login/login';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'bio', component: Bio},
  {path: 'resume', component: Resume},
  {path: 'projects', component: Projects},
  {path: 'login', component: Login}
//  {path: 'github', component: RepoBrowser,
//    children: [
//      {path: '', component: RepoList},
//      {path: ':org', component: RepoList,
//        children: [
//          {path: '', component: RepoDetail},
//          {path: ':repo', component: RepoDetail}
//        ]
//      }]
//  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AndrewLintereurRoutingModule { }
