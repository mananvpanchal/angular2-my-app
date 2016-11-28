import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { LessonService } from './lesson.service';
import { AppComponent }  from './app.component';

const routerConfig = [
    {
      path: "home",
      loadChildren: './home/home.module'
    }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule, RouterModule.forRoot(routerConfig) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LessonService]
})
export class AppModule { }
