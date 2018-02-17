"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var sign_in_component_1 = require("./general/sign_in/sign_in.component");
var sign_out_component_1 = require("./general/sign_out/sign_out.component");
var error_404_component_1 = require("./general/404/error_404.component");
var error_504_component_1 = require("./general/504/error_504.component");
var register_component_1 = require("./general/register/register.component");
var recover_password_component_1 = require("./general/recover_password/recover_password.component");
var dashboard_component_1 = require("./application/dashboard/dashboard.component");
var index_1 = require("./services/index");
exports.appRoutes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'app_signin', component: sign_in_component_1.SignInComponent },
    { path: 'app_signout', component: sign_out_component_1.SignOutComponent },
    { path: 'app_register', component: register_component_1.RegisterComponent },
    { path: 'app_recover_password', component: recover_password_component_1.RecoverPasswordComponent },
    { path: 'app_404', component: error_404_component_1.Error404Component },
    { path: 'app_504', component: error_504_component_1.Error504Component },
    { path: 'app_dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [index_1.AuthGuard] },
    { path: '**', redirectTo: 'www.saasapp.com' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, sign_in_component_1.SignInComponent, sign_out_component_1.SignOutComponent, error_404_component_1.Error404Component, error_504_component_1.Error504Component, register_component_1.RegisterComponent, recover_password_component_1.RecoverPasswordComponent, dashboard_component_1.DashboardComponent],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(exports.appRoutes),
                forms_1.FormsModule,
                http_1.HttpClientModule,
            ],
            providers: [index_1.AuthenticationService, index_1.AuthGuard, index_1.UserService, index_1.OrgService, index_1.TokenInterceptor],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map