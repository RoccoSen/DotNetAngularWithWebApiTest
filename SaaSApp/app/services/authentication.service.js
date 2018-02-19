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
require("rxjs/add/operator/map");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (userName, password) {
        var _this = this;
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var data = "grant_type=password&userName=" + userName + "&password=" + password;
        return this.http.post('token', data, httpOptions)
            .map(function (response) {
            // login successful if there's a bear token in the response
            var token = response && response.access_token;
            if (token) {
                // set token property
                _this.token = token;
                // store userName and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ token: _this.token }));
                localStorage.setItem('userName', JSON.stringify({ userName: userName }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                console.log('bad login');
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userName');
    };
    AuthenticationService.prototype.register = function (userName, password) {
        var data = {
            Password: password,
            Email: userName
        };
        return this.http.post('api/account/register', data)
            .map(function (response) {
            return true;
        });
    };
    AuthenticationService.prototype.changePasswordRequest = function (userName) {
        var para = new http_1.HttpParams().set('username', userName);
        return this.http.get('api/account/changepasswordrequest', { params: para })
            .map(function (response) {
            return true;
        });
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map