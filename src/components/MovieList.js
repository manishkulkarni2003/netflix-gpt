import { useState } from "react";
import MovieCard from "./MovieCard";
import TrailerModel from "./TrailerModel";

const MovieList = ({ title, movie }) => {
    const [selectedMovieId, setSelectedMovieId] = useState(null); // Store the selected movie ID
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

    const handleMovieClick = (id) => {
        setSelectedMovieId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedMovieId(null);
        setIsModalOpen(false);
    };

    return (
        <div className="px-6 text-white">
            <h1 className="text-lg md:text-3xl py-4">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar">
                <div className="flex">
                    {movie?.map((m) => (
                        <MovieCard
                            key={m.id}
                            poster_path={m.poster_path}
                            onClick={() => handleMovieClick(m.id)}
                        />
                    ))}
                </div>
            </div>
            {isModalOpen && selectedMovieId && (
                <TrailerModel movieId={selectedMovieId} onClose={closeModal} />
            )}
        </div>
    );
};

export default MovieList;
