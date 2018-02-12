import { Component } from '@angular/core';
import { UserService } from '../../services/index';
import { User } from '../../model/index';

@Component({
    selector: 'my-app',
    templateUrl: `./dashboard.component.html`,
})
export class DashboardComponent {

    users: User[] = [];

    token = (localStorage.getItem('currentUser') !== null) ? JSON.parse(localStorage.getItem('currentUser')).token : null;
    userName = (localStorage.getItem('userName') !== null) ? JSON.parse(localStorage.getItem('userName')).userName : null;

    constructor(
        private usrSvc: UserService) {

        // get users from secure api end point
        this.usrSvc.getUsers()
            .subscribe(users => {
                this.users = users;
                console.log(this.users[0].email);
            },
            error => {
                console.log('should say unauthorized');
                console.log('oops', error)
            });
    }


}