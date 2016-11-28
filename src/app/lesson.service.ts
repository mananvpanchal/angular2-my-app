import { Injectable } from '@angular/core';

@Injectable()
export class LessonService {

  static counter = 0;
  id = 0;

  constructor() {
    console.log(`instantiated lessons service with id ${this.id}`);
  }

  incr() {
    this.id++;
  }

  getId() {
    return this.id;
  }
}
