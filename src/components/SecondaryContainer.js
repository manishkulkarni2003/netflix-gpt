import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const movie = useSelector(store => store.movie)
    return (
        movie.nowPlayingMovie && (
            <div className=" bg-black">
                <div className="-mt-59 pl-12 relative z-22">
                    <MovieList title={"TopRated"} movie={movie.TopRatedMovie} />
                    <MovieList title={"Now Playing"} movie={movie.nowPlayingMovie} />
                    <MovieList title={"Popular"} movie={movie.PopularMovie} />

                    <MovieList title={"Upcoming"} movie={movie.UpcomingMovie} />
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
