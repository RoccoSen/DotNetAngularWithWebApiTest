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
var SignInComponent = /** @class */ (function () {
    function SignInComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.username = "xxx@gmail.com";
        this.password = "xxx";
        this.loading = false;
        this.error = '';
    }
    SignInComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    SignInComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.username, this.password)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.router.navigate(['/app_dashboard']);
                _this.loading = false;
            }
            else {
                // login failed
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./sign_in.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.AuthenticationService])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign_in.component.js.map