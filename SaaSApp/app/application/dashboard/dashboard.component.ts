import { Component } from '@angular/core';
import { UserService, OrgService } from '../../services/index';
import { User, Organization } from '../../model/index';

@Component({
    selector: 'my-app',
    templateUrl: `./dashboard.component.html`,
})
export class DashboardComponent {

    users: User[] = [];
    organization: Organization = null;

    token = (localStorage.getItem('currentUser') !== null) ? JSON.parse(localStorage.getItem('currentUser')).token : null;
    userName = (localStorage.getItem('userName') !== null) ? JSON.parse(localStorage.getItem('userName')).userName : null;

    constructor(
        private usrSvc: UserService,
        private orgSvc: OrgService) {

        // get users from secure api end point
        //this.usrSvc.getUsers()
        //    .subscribe(users => {
        //        this.users = users;
        //        console.log(this.users[0].email);
        //    },
        //    error => {
        //        console.log('should say unauthorized');
        //        console.log('oops', error)
        //    });

        this.orgSvc.getOrg()
            .subscribe(organization => {
                this.organization = organization;
                console.log(this.organization);
            },
            error => {
                console.log('oops', error)
            });
    }


}