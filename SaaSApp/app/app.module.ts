import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PublicLayoutComponent, PrivateLayoutComponent } from './layout/index';
import { SignInComponent, SignOutComponent, Error404Component, Error504Component, RegisterComponent, RecoverPasswordComponent, AccountConfirmComponent } from './general/index';

//Private
import { DashboardComponent } from './application/dashboard/dashboard.component';

//Services
import { AuthenticationService, UserService, AuthGuard, OrgService, TokenInterceptor } from './services/index';

export const appRoutes: Routes = [
    {
        path: '', component: PublicLayoutComponent,
        children: [
            { path: '', component: SignInComponent },
            { path: 'app_signout', component: SignOutComponent },
            { path: 'app_register', component: RegisterComponent },
            { path: 'app_recover_password', component: RecoverPasswordComponent },
            { path: 'app_account_confirm', component: AccountConfirmComponent },
            { path: 'app_404', component: Error404Component },
            { path: 'app_504', component: Error504Component }
        ]
    },
    {
        path: 'app_dashboard', component: PrivateLayoutComponent,
        children: [
            { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: 'app_404', component: Error404Component },
            { path: 'app_504', component: Error504Component }
        ]
    }
    //,
    //{ path: '**', redirectTo: 'app_404' }
];


@NgModule({
    declarations: [AppComponent, SignInComponent, SignOutComponent, Error404Component, Error504Component, RegisterComponent, RecoverPasswordComponent, DashboardComponent
        , PublicLayoutComponent, PrivateLayoutComponent, AccountConfirmComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpClientModule,
    ],
    providers: [AuthenticationService, AuthGuard, UserService, OrgService, TokenInterceptor ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
