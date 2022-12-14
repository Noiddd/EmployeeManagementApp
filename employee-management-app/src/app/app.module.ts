import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeTeamComponent } from './home-team/home-team.component';
import { MembercardComponent } from './membercard/membercard.component';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeAddComponent } from './modal/employee-add/employee-add.component';
import { FormsModule } from '@angular/forms';
import { ProjectAddComponent } from './modal/project-add/project-add.component';
import { EmployeeUpdateComponent } from './modal/employee-update/employee-update.component';
import { ProjectUpdateComponent } from './modal/project-update/project-update.component';
import { EmployeeDeleteComponent } from './modal/employee-delete/employee-delete.component';
import { ProjectDeleteComponent } from './modal/project-delete/project-delete.component';
import { ProjectAddemployeeComponent } from './modal/project-addemployee/project-addemployee.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { HomeComponent } from './home/home.component';
import { HomeProjectComponent } from './home-project/home-project.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: AllEmployeesComponent },
  { path: 'projects', component: AllProjectsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeTeamComponent,
    HomeProjectComponent,
    MembercardComponent,
    ProjectcardComponent,
    EmployeeAddComponent,
    ProjectAddComponent,
    EmployeeUpdateComponent,
    ProjectUpdateComponent,
    EmployeeDeleteComponent,
    ProjectDeleteComponent,
    ProjectAddemployeeComponent,
    AllEmployeesComponent,
    AllProjectsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
