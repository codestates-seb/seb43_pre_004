import { atom } from 'recoil';

export const QuestionList = atom({
  key: 'QuestionList',
  default: [],
});

export const PostId = atom({
  key: 'PostId',
  default: '',
});

export const PostContainer = atom({
  key: 'PostContainer',
  default: {},
});

export const AskTitle = atom({
  key: 'AskTitle',
  default: '',
});

export const AskEditor = atom({
  key: 'AskContent',
  default: '',
});
