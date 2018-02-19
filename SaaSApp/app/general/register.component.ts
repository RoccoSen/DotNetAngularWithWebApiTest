import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/index';

@Component({
    selector: 'my-app',
    templateUrl: `./register.component.html`,
})
export class RegisterComponent {

    email: string = "";
    password: string = ""

    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }


    private register() {

        if (null == this.email)
            return;

        if (null == this.password)
            return;
       
        var data = {
            Password: this.password
            , Email : this.email
        }

        this.authenticationService.register(this.email, this.password)
            .subscribe(result => {

                this.authenticationService.login(this.email, this.password)
                    .subscribe(result => {
                        if (result === true) {
                            // login successful
                            this.router.navigate(['/app_dashboard']);
                            this.loading = false;
                        } else {
                            // login failed
                            this.error = 'Username or password is incorrect';
                            console.log(result);
                            this.loading = false;
                        }
                    },
                    err => {
                        this.error = err.error.error_description;
                        this.password = "";
                    });
            },
            err => {
                this.error = err.error.message;
                this.password = "";
            });
    }
}