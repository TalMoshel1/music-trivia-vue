export interface QuestionInterface {
  body: string;
  answers: AnswerInterface[];
  _id: string;
}

export interface AnswerInterface {
  answerId: number;
  body: string;
  audioSrc?: string;
}

export interface userAnswerInterface {
  questionId: string;
  answerId: number;
}

export interface ScoreInterface {
  _id: string;
  name: string;
  score: number;
  timeStamp: string;
  __v: number;
  isMe?: boolean;
}
