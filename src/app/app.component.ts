import { Component } from '@angular/core';
import { LessonService } from './lesson.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
    <input type="text" (keyup)="onChange($event)" />
    <span>{{name}}</span>
    <span>{{ls.getId()}}</span>
    <a routerLink="home">Home</a>
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {

  name: string;

  constructor(@Inject(LessonService) private ls) {
    this.name = null;
    ls.incr();
  }

  onChange(event) {
    this.name = event.target.value;
    console.log(event.target.value);
  }
}
