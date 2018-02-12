"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<router-outlet> <a routerLink=\"/app_signin\" routerLinkActive=\"active\">Sign In</a>\n                               <a routerLink=\"/app_signout\" routerLinkActive=\"active\">Sign Out</a>\n                               <a routerLink=\"/app_register\" routerLinkActive=\"active\">Register</a>\n                               <a routerLink=\"/app_recover_password\" routerLinkActive=\"active\">Recover Password</a>\n                               <a routerLink=\"/app_404\" routerLinkActive=\"active\">404</a>\n                               <a routerLink=\"/app_504\" routerLinkActive=\"active\">504</a>\n                               <a routerLink=\"/app_dashboard\" routerLinkActive=\"active\">Dashboard</a>\n               </router-outlet>'",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map