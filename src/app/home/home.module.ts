import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SampleModule } from '../sample/sample.module';
import { HomeComponent } from './home.component';

const routerConfig = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [SampleModule, RouterModule.forChild(routerConfig)],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export default class HomeModule {

}
