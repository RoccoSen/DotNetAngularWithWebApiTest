import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/index';

@Component({
    selector: 'my-app',
    templateUrl: `./sign_in.component.html`,
})
export class SignInComponent implements OnInit {

    username: string = "xxx@gmail.com";
    password: string = "xxx";

    loading = false;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    private login() {

        this.loading = true;
        this.authenticationService.login(this.username, this.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/app_dashboard']);
                    this.loading = false;
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
