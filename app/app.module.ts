import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';


import { routing }        from './app.routing';

import { HttpModule, JsonpModule } from '@angular/http';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { SideComponent } from './sidemenu/sidemenu.component';
import { ContentComponent } from './content/content.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AccountComponent } from './account/account.compontent';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    JsonpModule,
  
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactComponent,
    AdminComponent,
    SideComponent,
    ContentComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AccountComponent
  ],
  providers: [
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
