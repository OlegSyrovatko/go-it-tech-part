import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getFilter } from 'redux/selectors';

import { fetchTweets } from 'redux/tweets/operations';
import { selectLoading } from 'redux/tweets/selectors';
import { selectAllTweets } from 'redux/tweets/selectors';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import Filter from 'components/Filter';
import TweetListItem from 'components/TweetListItem';

import {
  Book,
  Button,
  UL,
  Li,
  // ContactsHead,
} from './Tweets.styled';


const Tweets = () => {
   const dispatch = useDispatch();
  // const filter = useSelector(getFilter);
  
  const filteredTweets = useSelector(selectAllTweets);
  // const filteredTweets = tweets.filter(contact =>
  //   contact.name.toLowerCase().includes(lowerFilter)
  // );
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    if (isLoading) Loading.circle('Loading...')
    else Loading.remove()
      
  }, [isLoading]);
  
  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

return (
  <>
    <Book>
      <Link to='/'>
        <Button type="button" >
          Back
        </Button>
      </Link><br /><br />
      <Filter />
      {filteredTweets.length > 0 && (
        <UL>
          {filteredTweets.map(tweet => (
            <Li key={tweet.id}>
              <TweetListItem tweet={tweet} />
            </Li>
          ))}
        </UL>
      )}
    </Book>
  </>

 );
};
export default Tweets;

