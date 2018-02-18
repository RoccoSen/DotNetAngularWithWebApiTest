import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: `./recover_password.component.html`,
})
export class RecoverPasswordComponent {

    username: string = "xxx@gmail.com";

    loading = false;
    error = '';

    private recover() {

        this.loading = true;

    }
}
