import MovieCard from "./MovieCard"

const MovieList = ({ title, movie }) => {
    console.log(movie)
    return (
        <div className="px-6  text-white">
            <h1 className="text-lg md:text-3xl py-4">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar ">

                <div className="flex ">
                    {movie?.map(movie => <MovieCard key={movie.id} poster_path={movie.poster_path} />)}

                </div>
            </div>


        </div>
    )
}

export default MovieList
