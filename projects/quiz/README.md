# Quiz

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Installation

Run `npm i generate-quiz` for installation. Before using this component include `QuizModule` in our `app.module.ts` imports.


## Usage

`<lib-quiz [questionData]="questionData" (answerData)="listenToAnswers($event)"></lib-quiz>`


Prepare the questions data in the below structure.

```
const questionsData=[ 
		{
			questionText: "Who killed John Wicks Dog?",
			questionId: "15544",
			options: [ 
				{ optionId: "1d23f", optionText: "John Doe" }, 
				{ optionId: "1er3e", optionText: "Walter White" },
				{ optionId: "3fgr4", optionText: "Jessy Pinkman" },
			    { optionId: "13fge", optionText: "Vivek Oberoi" },
			] 
		},
		{
			questionText: "Say my name?",
			questionId: "124354",
			options: [ 
				{ optionId: "3dfdf", optionText: "Heisenberg" }, 
				{ optionId: "35fgf", optionText: "Gus Fring" },
				{ optionId: "7gthg", optionText: "Hank Schrader" },
			    { optionId: "0df33", optionText: "Ted" },
			] 
		}
		
	]
```

> Note: `questionId` should be unique to question. `optionId` should be unique to that particular options array.


## Had any issues
Report any issues found at [quiz]('https://github.com/pavankalyan-codes/Angular-Re-usable-Quiz')

## Feature Suggestion
Please reach out to me for any feature suggestions [pavankalyan.c](mail:pavankalyan141640@gmail.com)
