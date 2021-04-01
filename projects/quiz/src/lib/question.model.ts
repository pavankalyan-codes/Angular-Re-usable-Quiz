export class Question {
  questionText: string;
  questionId: string;
  options: Option[];
  answer?: string;
  isLast?: boolean;
}
export class Option {
  optionId: string;
  optionText: string;
}
