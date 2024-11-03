import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovie: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovie: (state, action) => {
            state.nowPlayingMovie = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovie: (state, action) => {
            state.PopularMovie = action.payload
        },
    }
})

export const { addNowPlayingMovie, addTrailerVideo, addPopularMovie } = movieSlice.actions;

export default movieSlice.reducer;