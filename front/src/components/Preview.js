import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const Inner = styled.div`
  /* background-color: red; */
`;

const Wrapper = styled.div`
  .ql-formats {
    padding: 4px 12px;
  }
  .ql-editor {
    /* background-color: yellow; */
    height: 230px;
  }
`;

const modules = {
  toolbar: [
    ['bold', 'italic'],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    // [{ size: [] }],
    ['link', 'image', 'video'],
    [{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
  ],
};

function Preview() {
  const [value, setValue] = useState('');
  return (
    <Wrapper>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
      {/* 브라우저 DOM에서 innerHTML을 사용하기 위한 React의 대체 방법 */}
      {/* XSS취약점이 포함될 가능성 O , 문자열 값은지 충분히 검증하고 이스케이픙을 해야합니다. */}
      <Inner dangerouslySetInnerHTML={{ __html: value }} />
      {/* <div>{value}</div> */}
    </Wrapper>
  );
}

export default Preview;
