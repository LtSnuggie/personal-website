import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {routes} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {Home} from './home/home';
import {Resume} from './resume/resume';
import {Bio} from './bio/bio';
import {Projects} from './projects/projects';
import {Login} from './login/login';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {MenuHeader} from './components/menu-header/menu-header';

@NgModule({
  declarations: [AppComponent, Home, MenuHeader, Resume, Bio, Projects, Login ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
