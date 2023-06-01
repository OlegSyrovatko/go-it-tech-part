import { createSlice } from '@reduxjs/toolkit';
import { fetchTweets, followTweet, unFollowTweet } from './operations';

import Notiflix from 'notiflix';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  Notiflix.Notify.failure(action.payload);
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: {
    items: [],
    followers: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.pending, handlePending)
      .addCase(followTweet.pending, handlePending)
      .addCase(unFollowTweet.pending, handlePending)
      .addCase(fetchTweets.rejected, handleRejected)
      .addCase(followTweet.rejected, handleRejected)
      .addCase(unFollowTweet.rejected, handleRejected)
      .addCase(fetchTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(followTweet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const tweetId = action.meta.arg.id;
        const tweet = state.items.find(tweet => tweet.id === tweetId);
        if (tweet) {
          tweet.followers += 1;
          state.followers.push(Number(tweetId));
          Notiflix.Notify.success(`Tweet followed`);
        }
      })
      .addCase(unFollowTweet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const tweetId = action.meta.arg.id;
        const tweet = state.items.find(tweet => tweet.id === tweetId);
        if (tweet) {
          tweet.followers -= 1;
          state.followers = state.followers.filter(id => id !== Number(tweetId));
          Notiflix.Notify.success(`Tweet unfollowed`);
        }
      });
  },
});

export const tweetsReducer = tweetsSlice.reducer;