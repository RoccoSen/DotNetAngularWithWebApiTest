"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../services/index");
var PrivateLayoutComponent = /** @class */ (function () {
    function PrivateLayoutComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    PrivateLayoutComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove("hold-transition");
        body.classList.remove("login-page");
        body.classList.add("skin-black");
        body.classList.add("sidebar-mini");
    };
    PrivateLayoutComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/app_signout']);
    };
    PrivateLayoutComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './private.layout.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.AuthenticationService])
    ], PrivateLayoutComponent);
    return PrivateLayoutComponent;
}());
exports.PrivateLayoutComponent = PrivateLayoutComponent;
//# sourceMappingURL=private.layout.component.js.map