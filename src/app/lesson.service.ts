import { Injectable } from '@angular/core';

@Injectable()
export class LessonService {

  static counter = 0;
  id = 0;

  constructor() {
    console.log('LessonService one');
  }

  incr() {
    this.id++;
  }

  getIncrId() {
    return this.id
  }
}
