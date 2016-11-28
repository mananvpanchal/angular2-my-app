import { Component } from '@angular/core';

@Component({
  template: '<h1>{{name}}\'s Home</h1><br/><sample-ele></sample-ele>'
})

export class HomeComponent {
  name = 'Manan';
}
