import { useSelector, useDispatch } from 'react-redux';
import { followTweet, unFollowTweet } from 'redux/tweets/operations';
import { selectFollowers } from 'redux/tweets/selectors';

import {
  Avatar,
  Img,
  Rect,
  Tweets,
  Foll,
  Blocks,
  ButtonFw,
  ButtonFwg,
  ButtonText,
} from './TweetListItem.styled';

const TweetListItem = ({ tweet }) => {
  const dispatch = useDispatch();
  const myFollowers = useSelector(selectFollowers);
  const isFollower = myFollowers.includes(Number(tweet.id));

  return (
    <>
      <Rect />
      <Avatar>
        <Img
          src={tweet.avatar}
          title={tweet.user}
          alt={tweet.user}
          width={63}
          height={63}
        />
      </Avatar>
      <Blocks>
        <Tweets>{tweet.tweets} tweets</Tweets>
        <Foll>
          {tweet.followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
          followers
        </Foll>
        {isFollower ? (
          <ButtonFwg
            onClick={() => {
              dispatch(unFollowTweet(tweet));
            }}
          >
            <ButtonText>Following</ButtonText>
          </ButtonFwg>
        ) : (
          <ButtonFw
            onClick={() => {
              dispatch(followTweet(tweet));
            }}
          >
            <ButtonText>Follow</ButtonText>
          </ButtonFw>
        )}
      </Blocks>
    </>
  );
};
export default TweetListItem;
