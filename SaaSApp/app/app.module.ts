import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './Login/app.login.component';

export const ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: '/login', component: LoginComponent },
];


@NgModule({
    imports: [BrowserModule, RouterModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
