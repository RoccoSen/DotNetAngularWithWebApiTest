import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<router-outlet> <a routerLink="/app_signin" routerLinkActive="active">Sign In</a>
                               <a routerLink="/app_signout" routerLinkActive="active">Sign Out</a>
                               <a routerLink="/app_register" routerLinkActive="active">Register</a>
                               <a routerLink="/app_recover_password" routerLinkActive="active">Recover Password</a>
                               <a routerLink="/app_404" routerLinkActive="active">404</a>
                               <a routerLink="/app_504" routerLinkActive="active">504</a>
                               <a routerLink="/app_dashboard" routerLinkActive="active">Dashboard</a>
               </router-outlet>'`,
})
export class AppComponent  {
}
