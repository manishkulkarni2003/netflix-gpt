import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addPopularMovie } from "../utils/movieSlice"
import { useEffect } from "react"

const usePopularMovie = () => {

    const dispatch = useDispatch();
    const PopularMovie = useSelector((store) => store.movie.PopularMovie)

    const getPopularMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const json = await data.json();
        console.log(json.results);
        dispatch(addPopularMovie(json.results))
    }
    //memoization
    useEffect(() => {
        !PopularMovie && getPopularMovie()
    }, [])
}

export default usePopularMovie;