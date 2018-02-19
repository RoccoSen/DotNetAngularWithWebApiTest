import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../services/index';

@Component({
    selector: 'my-app',
    templateUrl: `./change_password.component.html`,
})
export class ChangePasswordComponent implements OnInit {

    error: string = '';
    password1: string = '';
    password2: string = '';
    userId: string = '';
    code: string = '';
    isPasswordChanged: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.userId = params['userId'];
            this.code = params['code'];
        });
    }

    changePassword() {

        this.authenticationService.resetPassword(this.userId, this.code, this.password1, this.password2).subscribe(result =>
        {
            this.isPasswordChanged = true;
        },
        err => {
            this.error = err.error.message;
        });
    }
}
