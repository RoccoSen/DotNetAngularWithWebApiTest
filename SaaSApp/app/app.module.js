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
var index_1 = require("./layout/index");
var index_2 = require("./general/index");
//Private
var dashboard_component_1 = require("./application/dashboard/dashboard.component");
//Services
var index_3 = require("./services/index");
exports.appRoutes = [
    {
        path: '', component: index_1.PublicLayoutComponent,
        children: [
            { path: '', component: index_2.SignInComponent },
            { path: 'app_signout', component: index_2.SignOutComponent },
            { path: 'app_register', component: index_2.RegisterComponent },
            { path: 'app_recover_password', component: index_2.RecoverPasswordComponent },
            { path: 'app_404', component: index_2.Error404Component },
            { path: 'app_504', component: index_2.Error504Component }
        ]
    },
    {
        path: 'app_dashboard', component: index_1.PrivateLayoutComponent,
        children: [
            { path: '', component: dashboard_component_1.DashboardComponent, canActivate: [index_3.AuthGuard] },
            { path: 'app_404', component: index_2.Error404Component },
            { path: 'app_504', component: index_2.Error504Component }
        ]
    },
    { path: '**', redirectTo: 'app_404' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, index_2.SignInComponent, index_2.SignOutComponent, index_2.Error404Component, index_2.Error504Component, index_2.RegisterComponent, index_2.RecoverPasswordComponent, dashboard_component_1.DashboardComponent,
                index_1.PublicLayoutComponent, index_1.PrivateLayoutComponent],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(exports.appRoutes),
                forms_1.FormsModule,
                http_1.HttpClientModule,
            ],
            providers: [index_3.AuthenticationService, index_3.AuthGuard, index_3.UserService, index_3.OrgService, index_3.TokenInterceptor],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map