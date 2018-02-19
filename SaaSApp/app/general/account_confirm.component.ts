import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../services/index';

@Component({
    selector: 'my-app',
    templateUrl: `./account_confirm.component.html`,
})
export class AccountConfirmComponent implements OnInit {

    error: string = '';
    isConfirmed: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            let userId = params['userId'];
            let code = params['code'];

            this.authenticationService.confirmEmail(userId, code).subscribe(result => {
                this.isConfirmed = true;
            },
            err => {
                this.error = err.error.message;
            });
        });
    }
}
