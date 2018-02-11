import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: `./dashboard.component.html`,
})
export class DashboardComponent {
    private access_token = localStorage.getItem('access_token');
    private expires_in = localStorage.getItem('expires_in');
    private token_type = localStorage.getItem('token_type');
    private userName = localStorage.getItem('userName');     
}