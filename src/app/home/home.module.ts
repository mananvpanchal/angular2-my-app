import { NgModule } from '@angular/core';
import { SampleModule } from '../sample/sample.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [SampleModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})

export class HomeModule {

}
