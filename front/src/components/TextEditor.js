import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  .ql-formats {
    padding: 4px 12px;
  }
  .ql-editor {
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

function TextEditor() {
  const [value, setValue] = useState('');
  return (
    <Wrapper>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </Wrapper>
  );
}

export default TextEditor;
