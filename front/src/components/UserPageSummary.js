import styled from 'styled-components';
import { ReactComponent as UserFeed } from '../image/userFeed.svg';
import { ReactComponent as SpotReputation } from '../image/spotReputation.svg';
import { ReactComponent as SpotBadge } from '../image/spotBadge.svg';
import { ReactComponent as SpotAstronaut } from '../image/spotAstronaut.svg';
import UserPagePanel from './UserPagePanel';
import UserPageAside from './UserPageAside';

const UserSection = styled.section`
  width: 857px;
  font-size: 13px;
  color: #6a737c;
`;
const Summary = styled.div`
  margin-bottom: 10px;
`;
const AsideFlex = styled.div`
  display: flex;
  margin: -8px;
`;
const PanelFlex = styled.div`
  display: flex;
  justify-content: space-between;
  > .panel-flex {
    flex-grow: 1;
    > .panel-left {
      margin-right: 24px;
    }
  }
`;
const Feed = styled.div`
  margin: 20px 0px 30px 0px;
  > div {
    display: flex;
    align-items: center;
    > .feed-img {
      border-radius: 3px;
      height: 18px;
      margin-right: 5px;
    }
    > span {
      color: #0074cc;
    }
  }
`;
const H2 = styled.h2`
  margin: 0px 0px 8px 0px;
  font-size: 21px;
  font-weight: 400;
  color: #232629;
`;

function UserPageSummary() {
  return (
    <UserSection>
      <Summary>
        <H2>Summary</H2>
        <AsideFlex>
          <UserPageAside
            size="43%"
            img={<SpotReputation />}
            title="Requtation is how the community thanks you"
            content="When users upvote your helpful posts, you'll earn reputation and unlock new privileges."
            subContent="Learn more about reputation and privileges"
          />
          <UserPageAside
            size="32%"
            img={<SpotBadge />}
            title="Earn badges for helpful actions"
            content="Badges are bits of digital flair that you get when you participate in especially helpful ways."
          />
          <UserPageAside
            size="25%"
            title="Measure your impact"
            img={<SpotAstronaut />}
            content="Your posts and helpful actions here help hundreds or thousands of people searching for help."
          />
        </AsideFlex>
      </Summary>
      <PanelFlex>
        <div className="panel-flex">
          <div className="panel-left">
            <UserPagePanel
              title="Answers"
              button
              text="You have not"
              spanText="answered"
              subtext="any questions"
            />
          </div>
          <div className="panel-left">
            <UserPagePanel
              title="Tags"
              text="You have not participated in any"
              spanText="tags"
            />
          </div>
        </div>
        <div className="panel-flex">
          <div className="panel">
            <UserPagePanel
              title="Questions"
              button
              text="You have not"
              spanText="asked"
              subtext="any questions"
            />
          </div>
          <div className="panel">
            <UserPagePanel
              title="Requtation"
              text="You have no recent"
              spanText="reputation changes"
            />
          </div>
        </div>
      </PanelFlex>
      <UserPagePanel
        title="Badges"
        text="You have not earned any"
        spanText="badges"
      />
      <UserPagePanel
        title="Followed posts"
        button
        text="You are not"
        spanText="following any posts"
      />
      <UserPagePanel title="Accounts" spanText="Stack Overflow" />
      <UserPagePanel
        title="Active bounties (0)"
        text="You have no active"
        spanText="bounties"
      />
      <UserPagePanel
        title="Articles"
        button
        text="You have not created any"
        spanText="articles"
      />
      <UserPagePanel
        title="Votes cast"
        text="You have not cast any"
        spanText="votes"
      />
      <Feed>
        <div>
          <UserFeed className="feed-img" />
          <span>User feed</span>
        </div>
      </Feed>
    </UserSection>
  );
}

export default UserPageSummary;
