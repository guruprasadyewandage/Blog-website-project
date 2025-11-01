import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // We'll store an array of posts here
    posts: [], 
};

const postSlice = createSlice({
    name: "posts", // Using "posts" as the slice name
    initialState,
    reducers: {
        // Reducer to set all posts (used after fetching from Appwrite)
        setPosts: (state, action) => {
            // The payload will contain the array of posts
            state.posts = action.payload.posts; 
        },
        // We can add more specific reducers later if needed, e.g.:
        // addPost: (state, action) => { state.posts.push(action.payload.post) }
    }
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;