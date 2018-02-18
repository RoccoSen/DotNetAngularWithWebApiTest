import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/index';

@Component({
    selector: 'my-app',
    templateUrl: './private.layout.component.html',
    styles: []
})
export class PrivateLayoutComponent implements OnInit {


    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }


    ngOnInit() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove("hold-transition");
        body.classList.remove("login-page");
        body.classList.add("skin-black");
        body.classList.add("sidebar-mini");
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/app_signout']);
    }

}