import { selector } from 'recoil';
import questionState from '../recoil/atoms';

const selectedQuestionState = selector({
  key: 'selectedQuestionState',

  get: ({ get }) => {
    // questionState의 값을 가져와서 questions라는 변수에 저장
    const questions = get(questionState);
    // questions의 길이가 1보다 크면 첫번째 항목인 questions[0]을 반환하고, 그렇지 않으면 null을 반환
    return questions.length > 0 ? questions[0] : null;
  },
});

export default selectedQuestionState;
