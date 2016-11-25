import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
    <input type="text" (keyup)="onChange($event)" />
    <span>{{name}}</span>
    <my-home></my-home>
  </div>`
})
export class AppComponent {

  name: string;

  constructor() {
    this.name = null;
  }

  onChange(event) {
    this.name = event.target.value;
    console.log(event.target.value);
  }
}
