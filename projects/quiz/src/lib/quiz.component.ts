import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from './question.model';
@Component({
  selector: 'lib-quiz',
  template: `
    <div class="root-div">
      <div class="quiz">
        <div class="divLast d-flex justify-content-between">
          <div *ngFor="let question of questionData; let i = index">
            <div *ngIf="i == 0">
              <div class="left-end col-12" (click)="selectQuestion(i)">
                <div class="col-3 le"></div>
                <div
                  class="dot col-6"
                  [class.attempted]="answers[question.questionId] != null"
                  [class]="
                    currentQuestion.questionId == question.questionId
                      ? 'selected'
                      : ''
                  "
                >
                  {{ i + 1 }}
                </div>
                <div class="col-3"></div>
              </div>
            </div>
            <div *ngIf="i == questionData.length - 1">
              <div class="right-end col-12" (click)="selectQuestion(i)">
                <div class="col-3"></div>
                <div
                  class="dot col-6"
                  [class.attempted]="answers[question.questionId] != null"
                  [class]="
                    currentQuestion.questionId == question.questionId
                      ? 'selected'
                      : ''
                  "
                >
                  {{ i + 1 }}
                </div>
                <div class="col-3 re"></div>
              </div>
            </div>
            <div *ngIf="i != 0 && i != questionData.length - 1">
              <div class="dot-outer" (click)="selectQuestion(i)">
                <div
                  class="dot"
                  [class.attempted]="answers[question.questionId] != null"
                  [class]="
                    currentQuestion.questionId == question.questionId
                      ? 'selected'
                      : ''
                  "
                >
                  {{ i + 1 }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="question">
          <div class="mt-4">
            {{ currentQuestionIndex + 1 }}. {{ currentQuestion.questionText }}
          </div>
          <div class="options mt-4">
            <div
              class="mx-2 my-2 option p-3 mb-5"
              *ngFor="let option of currentQuestion.options"
              (click)="saveAnswer(currentQuestion.questionId, option.optionId)"
              [class]="
                answers[currentQuestion.questionId] === option.optionId
                  ? 'selectedOption'
                  : ''
              "
            >
              <span>{{ option.optionText }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="submit d-flex justify-content-center">
        <button
          (click)="submitAnswers()"
          class="btnSubmit btn btn-lg shadow-none"
        >
          Submit
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .divLast {
        height: 60px;
        border-bottom: 3px solid #cecece;
        margin-left: 10%;
        margin-right: 10%;
      }
      .dot:hover {
        height: 25px;
        width: 25px;
        position: relative;
        top: 45px;
        background-color: rgb(41, 212, 41);
        font-size: 18px;
        text-align: center;
        font-weight: 700;
      }
      .attempted {
        background-color: rgb(41, 212, 41) !important;
      }
      .dot-outer {
        width: 30px;
        display: flex;
        justify-content: center;
        font-size: 18px;
        text-align: center;
        font-weight: 700;
      }
      .dot {
        position: relative;
        cursor: pointer;
        top: 51px;
        height: 14px;
        width: 14px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        color: white;
        font-size: 0px;
      }
      .left-end {
        width: 30px;
        display: flex;
        justify-content: center;
      }
      .right-end {
        width: 30px;
        display: flex;
        justify-content: center;
      }
      .selected {
        height: 25px;
        width: 25px;
        position: relative;
        top: 45px;
        background-color: rgb(41, 212, 41);
        font-size: 18px;
        text-align: center;
        font-weight: 700;
      }
      .question {
        flex-direction: column;
        display: flex;
        margin-left: 10%;
        margin-right: 10%;
      }
      .options {
        display: flex;
        flex-flow: wrap;
        flex-direction: row;
      }

      .option {
        background-color: rgb(255, 255, 255);
        z-index: 0;
        width: 40%;
        border-radius: 10px;
        box-shadow: 0 14px 21px rgba(0, 0, 0, 0.25),
          0 0px 1px rgba(0, 0, 0, 0.22);
        cursor: pointer;
      }
      .option:hover {
        transform: scale(1.05);

        transition: all 0.2s ease-out;
        //animation: 1s ease-out 0s 1 normal none running fadeIn;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 25px 20px rgba(0, 0, 0, 0.12);
        background-color: rgb(41, 212, 41);
        color: white;
      }
      .quiz {
        background-color: rgb(250, 250, 250);
        height: 90%;
        overflow: auto;
      }
      @media only screen and (max-width: 500px) {
        .options {
          flex-direction: column;
        }
        .option {
          width: 100%;
        }
        .divLast {
          display: none !important;
        }
      }
      .submit {
        width: 100%;
        height: 10%;
      }
      .btnSubmit {
        height: 50px;
        margin: auto;
        background-color: rgb(41, 212, 41);
        color: white;
      }

      .btn:focus,
      .btn:active {
        outline: none !important;
        box-shadow: none !important;
      }
      .selectedOption {
        background-color: rgb(41, 212, 41);
        color: white;
        transform: scale(1.025);
      }
      .root-div {
        height: 100vh;
        font-family: 'Trebuchet MS', sans-serif;
      }
      .re,
      .le {
        background-color: #fafafa;
        position: relative;
        top: 51px;
      }
    `,
  ],
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
    this.currentQuestionIndex = id;
    this.currentQuestion = this.questionData[id];
  }

  goToNextQuestion() {
    if (this.currentQuestionIndex === this.questionData.length - 1) {
      return;
    }

    this.currentQuestionIndex++;
    this.currentQuestion = this.questionData[this.currentQuestionIndex];
  }

  saveAnswer(qid, aid) {
    this.answers[qid] = aid;
    this.goToNextQuestion();
  }

  submitAnswers() {
    this.answerData.emit(this.answers);
  }
}
