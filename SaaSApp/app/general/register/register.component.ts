import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'my-app',
    templateUrl: `./register.component.html`,
})
export class RegisterComponent {

    email: string = "";
    password: string = ""

    constructor(private http: HttpClient) {

    }

    private register() {

        if (null == this.email)
            return;

        if (null == this.password)
            return;
       
        var data = {
            Password: this.password
            , Email : this.email
        }

        this.http.post('api/account/register', data).subscribe(
            data => {
                console.log("POST Request is successful ", data);
            },
            error => {
                console.log("Error", error);
            }
        );
    }
}