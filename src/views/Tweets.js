import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFilter } from 'redux/selectors';

import { fetchTweets } from 'redux/tweets/operations';
import { selectLoading, selectAllTweets, selectFollowers } from 'redux/tweets/selectors';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import Filter from 'components/Filter';
import TweetListItem from 'components/TweetListItem';

import {
  Book,
  Button,
  UL,
  Li,
  Goit,
  Pic,
  Ellip, 
  // ContactsHead,
} from './Tweets.styled';

const Tweets = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const tweets = useSelector(selectAllTweets);
  const followers = useSelector(selectFollowers);

  const [visibleTweets, setVisibleTweets] = useState(3);

  let filteredTweets = tweets;

  if (filter === "follow") {
    filteredTweets = tweets.filter(tweet => !followers.includes(Number(tweet.id)));
  } else if (filter === "followings") {
    filteredTweets = tweets.filter(tweet => followers.includes(Number(tweet.id)));
  }

  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    if (isLoading) Loading.circle('Loading...');
    else Loading.remove();
  }, [isLoading]);

    useEffect(() => {
      setVisibleTweets(3);
  }, [filter]);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleTweets(prevVisibleTweets => prevVisibleTweets + 3);
  };

  return (
    <>
      <Book>
        <Link to='/'>
          <Button type="button">
            Back
          </Button>
        </Link><br /><br />
        <Filter />
        {filteredTweets.length > 0 && (
          <>
            <UL>
              {filteredTweets.slice(0, visibleTweets).map(tweet => (
                <Li key={tweet.id}>
                  <Goit /><Pic /><Ellip />
                  <TweetListItem tweet={tweet} />
                </Li>
              ))}
            </UL>
            {filteredTweets.length > visibleTweets && (
              <Button type="button" onClick={handleLoadMore}>
                Load More
              </Button>
            )}
          </>
        )}
      </Book>
    </>
  );
};

export default Tweets;
