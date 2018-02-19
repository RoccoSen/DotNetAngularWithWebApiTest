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
var index_1 = require("../services/index");
var RecoverPasswordComponent = /** @class */ (function () {
    function RecoverPasswordComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.username = "";
        this.error = "";
        this.isConfirmEmailSent = false;
        this.loading = false;
    }
    RecoverPasswordComponent.prototype.recover = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.changePasswordRequest(this.username)
            .subscribe(function (result) {
            if (result === true) {
                isConfirmEmailSent = true;
            }
        }, function (err) {
            _this.error = err.error.message;
            console.log(err);
        });
    };
    RecoverPasswordComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./recover_password.component.html",
        }),
        __metadata("design:paramtypes", [index_1.AuthenticationService])
    ], RecoverPasswordComponent);
    return RecoverPasswordComponent;
}());
exports.RecoverPasswordComponent = RecoverPasswordComponent;
//# sourceMappingURL=recover_password.component.js.map