import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../services/index';
import { User } from '../model/index';

@Injectable()
export class UserService {
    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
                ,'Authorization': 'Bearer ' + this.authenticationService.token
            })
        };

        this.http.get('/api/account/users')
            .subscribe(
            data => {
                console.log('success', data)

            },
            error => {
                console.log('should say unauthorized');
                console.log('oops', error)
            }
        );

        this.http.get('/api/account/users', httpOptions)
            .subscribe((response: User[]) => {

                console.log(response);
            });


        // get users from api
        return this.http.get('/api/account/users', httpOptions)
            .map((response: User[]) => {

                console.log(response);  
                return null;
            });
    }
}