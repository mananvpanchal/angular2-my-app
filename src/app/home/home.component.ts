import { Component, Inject } from '@angular/core';
import { LessonService } from '../lesson.service';

@Component({
  template: `<h1>{{name}}\'s Home</h1><br/>Lesson: {{ls.getIncrId()}}<sample-ele></sample-ele>`
})

export class HomeComponent {
  name = 'Manan';

  constructor(@Inject(LessonService) private ls:LessonService) {
    ls.incr();
    ls.incr();
  }
}
