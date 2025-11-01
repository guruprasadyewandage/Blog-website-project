import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import postReducer from './postSlice';
const store = configureStore({
    reducer: {
        auth : authSlice,
        posts: postReducer
        //TODO: add more slices here for posts
    }
});


export default store;