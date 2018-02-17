import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: `./recover_password.component.html`,
})
export class RecoverPasswordComponent {

    username: string = "rakkha@gmail.com";

    loading = false;
    error = '';

    private recover() {

        this.loading = true;

    }
}
