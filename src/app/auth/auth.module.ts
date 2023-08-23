import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDashboardComponent } from '../employee-dashboard/employee-dashboard.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    EmployeeDashboardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterLinkActive,
    ReactiveFormsModule

  ],
  exports: [
    LoginComponent,
    SignupComponent

  ]
})
export class AuthModule { }
