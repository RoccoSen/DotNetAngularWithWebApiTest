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
var AccountConfirmComponent = /** @class */ (function () {
    function AccountConfirmComponent(activatedRoute, authenticationService) {
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.error = '';
        this.isConfirmed = false;
    }
    AccountConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe(function (params) {
            var userId = params['userId'];
            var code = params['code'];
            _this.authenticationService.confirmEmail(userId, code).subscribe(function (result) {
                _this.isConfirmed = true;
            }, function (err) {
                _this.error = err.error.message;
            });
        });
    };
    AccountConfirmComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "./account_confirm.component.html",
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            index_1.AuthenticationService])
    ], AccountConfirmComponent);
    return AccountConfirmComponent;
}());
exports.AccountConfirmComponent = AccountConfirmComponent;
//# sourceMappingURL=account_confirm.component.js.map