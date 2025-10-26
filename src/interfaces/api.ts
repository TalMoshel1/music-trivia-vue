
export interface AnswerInterface {
  answerId: number;
  body: string;
  audioSrc?: string;
}

export interface QuestionInterface {
  _id: string;
  body: string;
  answers: AnswerInterface[];
}

export interface UserAnswerInterface {
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

export interface GameStoreInterface {
  board: ScoreInterface[] | null;
  boardResult: ScoreInterface[] | null;
  myScore: ScoreInterface | null;
  hasBoardResult: boolean;
  getBoardFromDb: () => void;
  postMyScore: (score: ScoreInterface) => void;
  setBoardResult: (newBoard: ScoreInterface[] | null) => void;
}
