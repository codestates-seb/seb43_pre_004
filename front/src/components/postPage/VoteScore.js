import styled from 'styled-components';
import { ReactComponent as VoteArrow } from '../../image/voteArrow.svg';
import { ReactComponent as BookMark } from '../../image/bookMark.svg';
import { ReactComponent as History } from '../../image/history.svg';

const Vote = styled.div`
  display: flex;
  width: 40px;
  font-size: 21px;
  color: #6a737c;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Button = styled.button`
  border: none;
  background: transparent;
  > .down-arrow {
    transform: rotate(180deg);
  }
`;
const Icon = styled.div`
  padding: 4px 0px;
`;

function VoteScore() {
  return (
    <Vote>
      <div>
        <Button type="button">
          <VoteArrow />
        </Button>
        <div>0</div>
        <Button type="button">
          <VoteArrow className="down-arrow" />
        </Button>
        <Icon>
          <BookMark />
        </Icon>
        <Icon>
          <History />
        </Icon>
      </div>
    </Vote>
  );
}

export default VoteScore;
