import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
    const { movieResults, movieNames } = useSelector((store) => store.gpt);

    if (!movieNames || !movieResults || movieResults.length === 0) return null;

    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
            <div>
                {movieNames.map((movieName, index) => (
                    <MovieList
                        key={index}
                        title={movieName}
                        movie={movieResults[index]} // Pass the correct array of movies
                    />
                ))}
            </div>
        </div>
    );
};

export default GptMovieSuggestion;
