import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './private.layout.component.html',
  //  template: `
  //  <app-header></app-header>
  //  <router-outlet></router-outlet>
  //`,
    styles: []
})
export class PrivateLayoutComponent implements OnInit {

    ngOnInit() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove("hold-transition");
        body.classList.remove("login-page");
        body.classList.add("skin-black");
        body.classList.add("sidebar-mini");
    }
}