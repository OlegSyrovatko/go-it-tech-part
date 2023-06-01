import { useSelector, useDispatch } from 'react-redux';
import { followTweet, unFollowTweet } from 'redux/tweets/operations';
import { selectFollowers } from 'redux/tweets/selectors';

import { P, Button } from './TweetListItem.styled';

const TweetListItem = ({ tweet }) => {
  const dispatch = useDispatch();
  const myFollowers = useSelector(selectFollowers);
  const isFollower = myFollowers.includes(Number(tweet.id));

  return (
    <>
      <P>{tweet.user}</P>
      <P>{tweet.avatar}</P>
      <P>{tweet.tweets}</P>
      <P>{tweet.followers}</P>
      {isFollower ? (
        <Button
          onClick={() => {
            dispatch(unFollowTweet(tweet));
          }}
        >
          UnFollow
        </Button>
      ) : (
        <Button
          onClick={() => {
            dispatch(followTweet(tweet));
          }}
        >
          Follow
        </Button>
      )}
    </>
  );
};
export default TweetListItem;
