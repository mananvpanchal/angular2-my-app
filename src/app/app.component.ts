import { Component, Inject } from '@angular/core';
import { LessonService } from './lesson.service';

@Component({
  selector: 'my-app',
  template: `<div>
    <input type="text" (keyup)="onChange($event)" />
    <span>{{name}}</span>
    <span>{{ls.getIncrId()}}</span>
    <a routerLink="home">Home</a>
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {

  name: string;

  constructor(@Inject(LessonService) private ls) {
    ls.incr();
    this.name = null;
  }

  onChange(event) {
    this.name = event.target.value;
    console.log(event.target.value);
  }
}
