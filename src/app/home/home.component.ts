import { Component } from '@angular/core';
import { LessonService } from '../lesson.service';
import { Inject } from '@angular/core';

@Component({
  template: `<h1>{{name}}\'s Home</h1><br/>Lessons Service Id = {{lessonService.id}}<br/><sample-ele></sample-ele>`
})

export class HomeComponent {
  name = 'Manan';

  //lessonService: LessonService;

  constructor(@Inject(LessonService) private lessonService) {
    console.log(lessonService);
    //this.lessonService = ls;
  }
}
