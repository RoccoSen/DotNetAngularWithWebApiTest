import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../services/index';

@Component({
    selector: 'my-app',
    templateUrl: `./recover_password.component.html`,
})
export class RecoverPasswordComponent {

    username: string = "";

    loading = false;
    error = '';

    constructor(
        private authenticationService: AuthenticationService) { }

    private recover() {

        this.loading = true;
        this.authenticationService.changePasswordRequest(this.username)
            .subscribe(result => {
                if (result === true) {
                 
                }
            },
            err => {
                this.error = err.error.message;
                console.log(err);
            });
    }
}
