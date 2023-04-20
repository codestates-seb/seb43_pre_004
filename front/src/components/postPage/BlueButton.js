import styled from 'styled-components';

const Button = styled.button`
  height: 37.78px;
  width: ${props => props.size};
  font-size: 13px;
  color: #fff;
  background-color: #0a95ff;
  padding: 10.4px;
  border: 1px;
  border: none;
  border-radius: 3px;
  :hover {
    background-color: #3172c6;
  }
`;

function BlueButton({ text, size }) {
  return (
    <div>
      <Button type="button" size={size}>
        {text}
      </Button>
    </div>
  );
}

export default BlueButton;
