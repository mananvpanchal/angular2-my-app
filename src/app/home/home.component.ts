import { Component } from '@angular/core';
import { LessonService } from '../lesson.service';
import { Inject } from '@angular/core';

@Component({
  template: `<h1>{{name}}\'s Home</h1><br/>Lessons Service Id = {{ls.getId()}}<br/><sample-ele></sample-ele>`
})

export class HomeComponent {
  name = 'Manan';

  constructor(@Inject(LessonService) private ls) {
    ls.incr();
  }
}
