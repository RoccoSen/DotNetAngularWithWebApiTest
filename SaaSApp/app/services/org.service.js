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
var index_1 = require("../services/index");
var OrgService = /** @class */ (function () {
    function OrgService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        // add authorization header with jwt token
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + this.authenticationService.token
            })
        };
    }
    OrgService.prototype.getOrg = function () {
        // get users from api
        return this.http.get('/api/organization/organizationget', this.httpOptions)
            .map(function (data) {
            console.log(data);
            return data;
        });
    };
    OrgService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            index_1.AuthenticationService])
    ], OrgService);
    return OrgService;
}());
exports.OrgService = OrgService;
//# sourceMappingURL=org.service.js.map