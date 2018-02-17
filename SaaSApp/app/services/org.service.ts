import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../services/index';
import { Organization } from '../model/index';

@Injectable()
export class OrgService {

    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {
    }

    // add authorization header with jwt token
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
            , 'Authorization': 'Bearer ' + this.authenticationService.token
        })
    };

    getOrg(): Observable<Organization> {

        // get users from api
        return this.http.get<Organization>('/api/organization/organizationget', this.httpOptions)
            .map(
            data => {
                console.log(data);
                return data;
            });
    }
}