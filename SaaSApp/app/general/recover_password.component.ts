import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/index';

@Component({
    selector: 'my-app',
    templateUrl: `./recover_password.component.html`,
})
export class RecoverPasswordComponent {

    error: string = "";
    isConfirmEmailSent: boolean = false;
    loading = false;

    private frm: NgForm;

    constructor(
        private authenticationService: AuthenticationService) { }

    private recover(frm: NgForm) {

        if (frm.invalid)
            return;

        this.error = "";   

        if (null == frm.value.email || "" == frm.value.email) {
            this.error = "Please enter your e-mail";
            return;
        }

        this.loading = true;

        this.authenticationService.changePasswordRequest(frm.value.email)
            .subscribe(result => {
                if (result === true) {
                    this.isConfirmEmailSent = true;
                }
            },
            err => {
                this.error = err.error.message;
                console.log(err);
            });
    }
}
