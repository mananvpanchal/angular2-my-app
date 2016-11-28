import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SampleModule } from '../sample/sample.module';
import { HomeComponent } from './home.component';
import { LessonService } from '../lesson.service';

const routerConfig = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [SampleModule, RouterModule.forChild(routerConfig)],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [LessonService]
})
export default class HomeModule {

}
