import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/index';

@Component({
    selector: 'my-app',
    templateUrl: `./recover_password.component.html`,
})
export class RecoverPasswordComponent {

    username: string = "";
    error: string = "";

    isConfirmEmailSent: boolean = false;
    loading = false;
    

    constructor(
        private authenticationService: AuthenticationService) { }

    private recover() {

        this.loading = true;
        this.authenticationService.changePasswordRequest(this.username)
            .subscribe(result => {
                if (result === true) {
                    isConfirmEmailSent = true;
                }
            },
            err => {
                this.error = err.error.message;
                console.log(err);
            });
    }
}
