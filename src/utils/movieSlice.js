import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovie: null,
        trailerVideo: null,
        PopularMovie: null
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
        addTopRatedMovie: (state, action) => {
            state.TopRatedMovie = action.payload
        },
        addUpcomingMovie: (state, action) => {
            state.UpcomingMovie = action.payload
        }
    }
})

export const { addNowPlayingMovie, addTrailerVideo, addPopularMovie, addTopRatedMovie, addUpcomingMovie } = movieSlice.actions;

export default movieSlice.reducer;