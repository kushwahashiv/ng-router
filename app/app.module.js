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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var http_1 = require('@angular/http');
var contact_component_1 = require('./contact/contact.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var admin_component_1 = require('./admin/admin.component');
var sidemenu_component_1 = require('./sidemenu/sidemenu.component');
var content_component_1 = require('./content/content.component');
var signup_component_1 = require('./signup/signup.component');
var login_component_1 = require('./login/login.component');
var header_component_1 = require('./header/header.component');
var footer_component_1 = require('./footer/footer.component');
var nav_component_1 = require('./nav/nav.component');
var account_compontent_1 = require('./account/account.compontent');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule,
                http_1.JsonpModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                contact_component_1.ContactComponent,
                admin_component_1.AdminComponent,
                sidemenu_component_1.SideComponent,
                content_component_1.ContentComponent,
                signup_component_1.SignupComponent,
                login_component_1.LoginComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                nav_component_1.NavComponent,
                account_compontent_1.AccountComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map