import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/index';

@Component({
    selector: 'my-app',
    templateUrl: `./sign_in.component.html`,
})
export class SignInComponent implements OnInit {

    loading = false;
    error: string = "";
    private frm: NgForm;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    private login(frm: NgForm) {

        if (frm.invalid)
            return;

        this.error = "";       

        if (null == frm.value.username || "" == frm.value.username) {
            this.error = "Please enter your e-mail";
            return;
        }

        if (null == frm.value.password || "" == frm.value.password) {
            this.error = "Please enter your password";
            return;
        }

        this.loading = true;
        this.authenticationService.login(frm.value.username, frm.value.password)
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
            });
    }
}
