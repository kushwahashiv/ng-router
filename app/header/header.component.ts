import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  template: `<div>Header Component</div>
<div style= "float:right;">
<a routerLink="login" routerLinkActive="active">Login</a><br>
<a routerLink="/dashboard">Dashboard</a><br/> 
<a routerLink="/contact">Contact</a>
</div>`
})
export class HeaderComponent {
  title = 'Header';

}

