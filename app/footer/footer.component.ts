import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  template: `
<div class="footer">
<div>{{title}}</div>
<p>&copy; Template</p>
</div>`
})
export class FooterComponent {
  title = 'Footer Component';
}

