import { atom } from 'recoil';
import questionData from '../question.json';

const questionState = atom({
  // questionState atom에 데이터가 저장
  key: 'questionState',
  default: questionData.data, // questionData에서 질문 데이터 가져와서 default 값으로 설정
});

export default questionState;
