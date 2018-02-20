import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/index';

@Component({
    selector: 'my-app',
    templateUrl: `./change_password.component.html`,
})
export class ChangePasswordComponent implements OnInit {

    private error: string = '';
    private frm: NgForm;
    private userId: string = '';
    private code: string = '';
    private isPasswordChanged: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.userId = params['userId'];
            this.code = params['code'];
        });
    }

    changePassword(frm: NgForm) {

        if (frm.invalid)
            return;

        this.error = "";

        if (null == frm.value.password1 || "" == frm.value.password1) {
            this.error = "Please enter your password";
            return;
        }

        if (null == frm.value.password2 || "" == frm.value.password2) {
            this.error = "Please enter your password";
            return;
        }

        if (frm.value.password1 != frm.value.password2) {
            this.error = "Passwords do not match";
            return;
        }

        this.authenticationService.resetPassword(this.userId, this.code, frm.value.password1, frm.value.password2).subscribe(result =>
        {
            this.isPasswordChanged = true;
        },
        err => {
            this.error = err.error.message;
        });
    }
}
