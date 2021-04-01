import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuizComponent, QuizModule } from 'quiz';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, QuizComponent],
  imports: [BrowserModule, QuizModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
