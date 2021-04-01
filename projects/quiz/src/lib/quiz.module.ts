import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuizComponent } from './quiz.component';

@NgModule({
  declarations: [QuizComponent],
  imports: [BrowserModule, CommonModule],
  exports: [QuizComponent],
})
export class QuizModule {}
