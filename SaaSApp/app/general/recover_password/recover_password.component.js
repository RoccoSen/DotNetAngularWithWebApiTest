"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RecoverPasswordComponent = /** @class */ (function () {
    function RecoverPasswordComponent() {
        this.username = "rakkha@gmail.com";
        this.loading = false;
        this.error = '';
    }
    RecoverPasswordComponent.prototype.recover = function () {
        this.loading = true;
    };
    RecoverPasswordComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./recover_password.component.html",
        })
    ], RecoverPasswordComponent);
    return RecoverPasswordComponent;
}());
exports.RecoverPasswordComponent = RecoverPasswordComponent;
//# sourceMappingURL=recover_password.component.js.map