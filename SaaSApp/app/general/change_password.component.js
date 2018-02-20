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
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(activatedRoute, authenticationService) {
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.error = '';
        this.userId = '';
        this.code = '';
        this.isPasswordChanged = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.code = params['code'];
        });
    };
    ChangePasswordComponent.prototype.changePassword = function (frm) {
        var _this = this;
        if (frm.invalid)
            return;
        this.error = "";
        if (null == frm.value.password1 || "" == frm.value.password1) {
            this.error = "Please enter your password";
            return;
        }
        if (null == frm.value.password2 || "" == frm.value.password2) {
            this.error = "Please enter your password";
            return;
        }
        if (frm.value.password1 != frm.value.password2) {
            this.error = "Passwords do not match";
            return;
        }
        this.authenticationService.resetPassword(this.userId, this.code, frm.value.password1, frm.value.password2).subscribe(function (result) {
            _this.isPasswordChanged = true;
        }, function (err) {
            _this.error = err.error.message;
        });
    };
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./change_password.component.html",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            index_1.AuthenticationService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=change_password.component.js.map