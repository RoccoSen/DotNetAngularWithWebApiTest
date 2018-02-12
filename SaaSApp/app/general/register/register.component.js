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
var http_1 = require("@angular/common/http");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http) {
        this.http = http;
        this.email = "";
        this.password = "";
    }
    RegisterComponent.prototype.register = function () {
        if (null == this.email)
            return;
        if (null == this.password)
            return;
        var data = {
            Password: this.password,
            Email: this.email
        };
        this.http.post('api/account/register', data).subscribe(function (data) {
            console.log("POST Request is successful ", data);
        }, function (error) {
            console.log("Error", error);
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./register.component.html",
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map