import styled from 'styled-components';

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: ${props => props.size};
  height: 300px;
  margin: 8px;
  padding: 12px;
  font-size: 12px;
  color: #232629;
  border-radius: 3px;
  border: 1px solid rgb(215 215 215);
`;

const H2 = styled.h2`
  margin: 15px 0px;
  font-size: 15px;
`;
const Content = styled.p`
  text-align: center;
  line-height: 17px;
  color: #6a737c;
`;
const Subtext = styled.p`
  font-size: 13px;
  margin: 20px 0px;
`;

function UserPageAside({ img, size, title, content, subContent }) {
  return (
    <Aside size={size}>
      {img}
      <H2>{title}</H2>
      <Content>{content}</Content>
      <Subtext>{subContent}</Subtext>
    </Aside>
  );
}

export default UserPageAside;
