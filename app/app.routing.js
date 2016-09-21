"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var login_component_1 = require('./login/login.component');
var signup_component_1 = require('./signup/signup.component');
var header_component_1 = require('./header/header.component');
var nav_component_1 = require('./nav/nav.component');
var footer_component_1 = require('./footer/footer.component');
var admin_component_1 = require('./admin/admin.component');
var sidemenu_component_1 = require('./sidemenu/sidemenu.component');
var contact_component_1 = require('./contact/contact.component');
var account_compontent_1 = require('./account/account.compontent');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    {
        path: 'admin',
        children: [
            { path: '', component: admin_component_1.AdminComponent },
            { path: '', component: header_component_1.HeaderComponent, outlet: 'header' },
            { path: '', component: footer_component_1.FooterComponent, outlet: 'footer' },
            { path: '', component: sidemenu_component_1.SideComponent, outlet: 'sidemenu' },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'signup', component: signup_component_1.SignupComponent }
        ]
    },
    {
        path: 'account',
        children: [
            { path: '', component: account_compontent_1.AccountComponent },
            { path: '', component: header_component_1.HeaderComponent, outlet: 'header' },
            { path: '', component: footer_component_1.FooterComponent, outlet: 'footer' },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'signup', component: signup_component_1.SignupComponent }
        ]
    },
    {
        path: 'secondpage', children: [
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
            { path: '', component: header_component_1.HeaderComponent, outlet: 'header' },
            { path: '', component: nav_component_1.NavComponent, outlet: 'navbar' },
            { path: '', component: footer_component_1.FooterComponent, outlet: 'footer' }
        ]
    },
    {
        path: 'welcome', children: [
            { path: '', component: dashboard_component_1.DashboardComponent },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map