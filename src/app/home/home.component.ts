import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  template: '<h1>{{name}}\'s Home</h1><br/><sample-ele></sample-ele>'
})

export class HomeComponent {
  name = 'Manan';
}
