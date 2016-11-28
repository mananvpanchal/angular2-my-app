import { Injectable } from '@angular/core';

@Injectable()
export class LessonService {

  static counter = 0;
  id = 0;

  constructor() {
    this.id = LessonService.counter++;
    console.log(`instantiated lessons service with id ${this.id}`);
  }
}
