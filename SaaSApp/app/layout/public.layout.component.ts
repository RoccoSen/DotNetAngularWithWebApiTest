import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './public.layout.component.html',
  //  template: `
  //  <h1>this is public</h1>
  //  <router-outlet></router-outlet>
  //`,
    styles: []
})
export class PublicLayoutComponent implements OnInit {

    ngOnInit() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove("skin-black");
        body.classList.remove("sidebar-mini");
        body.classList.add("hold-transition");
        body.classList.add("login-page");
    }
}