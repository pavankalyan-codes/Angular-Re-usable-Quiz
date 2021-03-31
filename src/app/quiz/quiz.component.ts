import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  @Input() questionData: Question[];

  @Output() answerData = new EventEmitter<{}>();

  currentQuestionIndex = 0;
  answers = {};

  //currentQuestionId = '1';

  currentQuestion: Question;

  constructor() {}

  ngOnInit(): void {
    this.currentQuestion = this.questionData[0];
  }

  selectQuestion(id) {
    console.log(id);
    this.currentQuestionIndex = id;
    this.currentQuestion = this.questionData[id];
  }

  goToNextQuestion() {
    console.log(this.currentQuestionIndex);

    if (this.currentQuestionIndex === this.questionData.length - 1) {
      return;
    }

    this.currentQuestionIndex++;
    this.currentQuestion = this.questionData[this.currentQuestionIndex];
  }

  saveAnswer(qid, aid) {
    this.answers[qid] = aid;
    console.log(this.answers);
    this.goToNextQuestion();
  }

  submitAnswers() {
    //console.log(this.answers);

    this.answerData.emit(this.answers);
  }
}
