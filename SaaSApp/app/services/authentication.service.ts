import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from '../model/index'

import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: HttpClient) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(userName: string, password: string): Observable<boolean> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        let data = "grant_type=password&userName=" + userName + "&password=" + password;

        return this.http.post('token', data, httpOptions)
            .map((response: Auth) => {

                // login successful if there's a bear token in the response
                let token = response && response.access_token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store userName and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ token: this.token }));
                    localStorage.setItem('userName', JSON.stringify({ userName: userName}));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    console.log('bad login');
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userName');
    }

    register(userName: string, password: string): Observable<boolean> {

        var data = {
            Password: password
            , Email: userName
        }

        return this.http.post('api/account/register', data)
            .map((response: Auth) => {
                return true;
            });
    }

    changePasswordRequest(userName: string): Observable<boolean> {

        let para = new HttpParams().set('username', userName);

        return this.http.get('api/account/changepasswordrequest', { params: para })
            .map((response: Auth) => {
                return true;
            });
    }

    confirmEmail(userID: string, code: string): Observable<boolean> {

        if (null == userID)
            return;

        if (null == code)
            return;

        var data = {
            UserID: userID
            , Code: code
        }

        return this.http.post('api/account/confirmemail', data)
            .map((response: Auth) => {
                return true;
            });
    }

    resetPassword(userID: string, code: string, newPassword: string, confirmPassword: string): Observable<boolean> {

        if (null == userID || null == code || null == newPassword || null == confirmPassword)
            return;

        var data = {
            UserID: userID
            , Code: code
            , NewPassword: newPassword
            , ConfirmPassword: confirmPassword
        }

        return this.http.post('api/account/resetpassword', data)
            .map((response: Auth) => {
                return true;
            });
    }
}