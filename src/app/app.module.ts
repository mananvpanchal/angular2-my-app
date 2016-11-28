import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { HomeModule } from './home/home.module';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { LessonService } from './lesson.service';

const routerConfig = [
    {
      path: "home",
      component: HomeComponent
    }
];

@NgModule({
  imports:      [ BrowserModule, HomeModule, RouterModule, RouterModule.forRoot(routerConfig) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LessonService]
})
export class AppModule { }
