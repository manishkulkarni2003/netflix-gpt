import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addPopularMovie } from "../utils/movieSlice"
import { useEffect } from "react"

const usePopularMovie = () => {

    const dispatch = useDispatch()

    const getPopularMovie = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const json = await data.json();
        console.log(json.results);
        dispatch(addPopularMovie(json.results))
    }
    useEffect(() => {
        getPopularMovie()
    }, [])
}

export default usePopularMovie;