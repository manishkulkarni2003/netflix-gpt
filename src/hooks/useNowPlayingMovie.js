import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovie } from "../utils/movieSlice"
import { useEffect } from "react"

const useNowPlayingMovie = () => {

    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovie(json.results))
    }
    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovie;