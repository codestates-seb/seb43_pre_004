import { atom } from 'recoil';

const QuestionList = atom({
  key: 'QuestionList',
  default: [],
});

export default QuestionList;
