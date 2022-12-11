import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeTeamComponent } from './home-team/home-team.component';
import { HomeProjectComponent } from './home-project/home-project.component';
import { MembercardComponent } from './membercard/membercard.component';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeAddComponent } from './modal/employee-add/employee-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeTeamComponent,
    HomeProjectComponent,
    MembercardComponent,
    ProjectcardComponent,
    EmployeeAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
