import { Component } from '@angular/core';
import { UserService } from '../../services/index';

@Component({
    selector: 'my-app',
    templateUrl: `./dashboard.component.html`,
})
export class DashboardComponent {

    constructor(
        private usrSvc: UserService) {

        var users = usrSvc.getUsers();
        console.log(users);
    }

    token = (localStorage.getItem('currentUser') !== null) ? JSON.parse(localStorage.getItem('currentUser')).token : null; 
    userName = (localStorage.getItem('userName') !== null) ? JSON.parse(localStorage.getItem('userName')).userName : null;
}