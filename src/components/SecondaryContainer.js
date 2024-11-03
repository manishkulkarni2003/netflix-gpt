import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const movie = useSelector(store => store.movie)
    return (
        movie.nowPlayingMovie && (
            <div className=" bg-black">
                <div className="-mt-59 pl-12 relative z-22">
                    <MovieList title={"Now Playing"} movie={movie.nowPlayingMovie} />
                    <MovieList title={"Popular"} movie={movie.PopularMovie} />

                    <MovieList title={"Trending"} movie={movie.nowPlayingMovie} />

                    <MovieList title={"Upcoming"} movie={movie.nowPlayingMovie} />
                </div>

                {/* 
            MovieCard
            MovieList
            -popular
            -trending
            -Now playing
             -comedy

            
            */}
            </div>
        ))
}

export default SecondaryContainer
