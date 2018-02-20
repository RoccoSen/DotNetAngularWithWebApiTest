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
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.error = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    RegisterComponent.prototype.register = function (frm) {
        var _this = this;
        if (frm.invalid)
            return;
        this.error = "";
        if (null == frm.value.username || "" == frm.value.username) {
            this.error = "Please enter your e-mail";
            return;
        }
        if (null == frm.value.password || "" == frm.value.password) {
            this.error = "Please enter your password";
            return;
        }
        this.authenticationService.register(frm.value.username, frm.value.password)
            .subscribe(function (result) {
            _this.authenticationService.login(frm.value.username, frm.value.password)
                .subscribe(function (result) {
                if (result === true) {
                    // login successful
                    _this.router.navigate(['/app_dashboard']);
                    _this.loading = false;
                }
                else {
                    // login failed
                    _this.error = 'Username or password is incorrect';
                    console.log(result);
                    _this.loading = false;
                }
            }, function (err) {
                _this.error = err.error.error_description;
            });
        }, function (err) {
            _this.error = err.error.message;
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./register.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.AuthenticationService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map