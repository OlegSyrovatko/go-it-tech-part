import { createSlice } from '@reduxjs/toolkit';

// import { fetchTweets, followTweet, unFollowTweet } from './operations';
import { fetchTweets } from './operations';
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
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTweets.pending]: handlePending,
    // [followTweet.pending]: handlePending,
    // [unFollowTweet.pending]: handlePending,
    [fetchTweets.rejected]: handleRejected,
    // [followTweet.rejected]: handleRejected,
    // [unFollowTweet.rejected]: handleRejected,
    [fetchTweets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // [followTweet.fulfilled](state, action) {
      // state.isLoading = false;
      // state.error = null;
      // const index = state.items.findIndex(
      //   contact => contact.id === action.payload.id
      // );
      //   state.items.splice(index, 1);
        // Notiflix.Notify.success(`Tweet followed`);
    // },
    //  [unFollowTweet.fulfilled](state, action) {
      // state.isLoading = false;
      // state.error = null;
      // const index = state.items.findIndex(
      //   contact => contact.id === action.payload.id
      // );
      //   state.items.splice(index, 1);
        // Notiflix.Notify.success(`Tweet unfollowed`);
    // },
  },
});


export const tweetsReducer = tweetsSlice.reducer;
