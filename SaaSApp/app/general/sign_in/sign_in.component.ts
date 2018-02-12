import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/index';

@Component({
    selector: 'my-app',
    templateUrl: `./sign_in.component.html`,
})
export class SignInComponent implements OnInit {

    username: string = "";
    password: string = "";

    loading = false;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    private login() {

        this.loading = true;
        this.authenticationService.login(this.username, this.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/app_dashboard']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });

        //const httpOptions = {
        //    headers: new HttpHeaders({
        //        'Content-Type': 'application/x-www-form-urlencoded'
        //    })
        //};


        //let data = "grant_type=password&username=" + this.email + "&password=" + this.password;
        //this.http.post('token', data, httpOptions).subscribe(
        //    data => {
        //        localStorage.setItem('currentUser', JSON.stringify({ token: data.access_token, name: this.email }));
        //    },
        //    error => {
        //        console.log("Error", error);
        //    }
        //);  
    }
}
