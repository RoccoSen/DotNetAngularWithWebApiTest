import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignInComponent } from './general/sign_in/sign_in.component';
import { SignOutComponent } from './general/sign_out/sign_out.component';
import { Error404Component } from './general/404/error_404.component';
import { Error504Component } from './general/504/error_504.component';
import { RegisterComponent } from './general/register/register.component';
import { RecoverPasswordComponent } from './general/recover_password/recover_password.component';

import { DashboardComponent } from './application/dashboard/dashboard.component';

import { AuthenticationService, UserService, AuthGuard, TokenInterceptor  } from './services/index';

export const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'app_signin', component: SignInComponent },
    { path: 'app_signout', component: SignOutComponent },
    { path: 'app_register', component: RegisterComponent },
    { path: 'app_recover_password', component: RecoverPasswordComponent },
    { path: 'app_404', component: Error404Component },
    { path: 'app_504', component: Error504Component },
    { path: 'app_dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'www.saasapp.com' }
];


@NgModule({
    declarations: [AppComponent, SignInComponent, SignOutComponent, Error404Component, Error504Component, RegisterComponent, RecoverPasswordComponent, DashboardComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpClientModule,
    ],
    providers: [AuthenticationService, AuthGuard, UserService, TokenInterceptor ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
