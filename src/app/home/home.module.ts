import { NgModule } from '@angular/core';
import { SampleModule } from '../sample/sample.module';
import { HomeComponent } from './home.component';
import { LessonService } from '../lesson.service';

@NgModule({
  imports: [SampleModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [LessonService]
})

export class HomeModule {

}
