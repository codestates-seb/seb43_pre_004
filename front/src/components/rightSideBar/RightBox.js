import styled from 'styled-components';

const BoxContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 4px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;
  border-radius: 3px;
  border: 1px solid rgb(215 215 215);
  margin-bottom: 16px;
`;
const H2 = styled.h2`
  background-color: #f8f9f9;
  padding: 12px 15px;
  color: #525960;
  font-size: 15px;
  border-bottom: 1px solid rgb(215 215 215);
`;
const SubBox = styled.div`
  padding: 4px 15px;
`;
const Text = styled.p`
  margin: 12px 0px;
  font-size: 13px;
  color: #0074cc;
`;
const Tag = styled.div`
  padding: 10px 15px 24px 0px;
  > span {
    margin: 2px 2px 6px 0px;
    padding: 4.8px 6px;
    background-color: #e1ecf4;
    border-radius: 2px;
    color: #39739d;
    font-size: 12px;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  margin: 4px 0px 16px 0px;
  padding: 9.6px;
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #39739d;
  color: #39739d;
  font-size: 12px;
  :hover {
    background-color: #b3d3ea;
  }
`;

function RightBox({ title, content, tag, button }) {
  return (
    <BoxContainer>
      <H2>{title}</H2>
      <SubBox>
        <Text>{content}</Text>
        {tag ? (
          <Tag>
            <span>{tag}</span>
          </Tag>
        ) : null}
        {button ? (
          <ButtonBox>
            <Button type="button">{button}</Button>
          </ButtonBox>
        ) : null}
      </SubBox>
    </BoxContainer>
  );
}

export default RightBox;
