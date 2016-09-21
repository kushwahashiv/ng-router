import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 moduleId: module.id,
  template: `<div>{{title}}</div>`
})
export class ContactComponent {
  title = 'Contact';
  constructor(private router: Router){}
  ngOnInit(){
        console.log("Contact");
        // this.router.navigate(['dashboard']);
  }
}

