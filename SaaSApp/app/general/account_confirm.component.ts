import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: `./account_confirm.component.html`,
})
export class AccountConfirmComponent {

    loading = false;
    error = '';

    private recover() {

        this.loading = true;

    }
}
