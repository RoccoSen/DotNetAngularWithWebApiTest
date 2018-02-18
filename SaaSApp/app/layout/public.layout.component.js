"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PublicLayoutComponent = /** @class */ (function () {
    function PublicLayoutComponent() {
    }
    PublicLayoutComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove("skin-black");
        body.classList.remove("sidebar-mini");
        body.classList.add("hold-transition");
        body.classList.add("login-page");
    };
    PublicLayoutComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './public.layout.component.html',
            //  template: `
            //  <h1>this is public</h1>
            //  <router-outlet></router-outlet>
            //`,
            styles: []
        })
    ], PublicLayoutComponent);
    return PublicLayoutComponent;
}());
exports.PublicLayoutComponent = PublicLayoutComponent;
//# sourceMappingURL=public.layout.component.js.map