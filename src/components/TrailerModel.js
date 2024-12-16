import { useState, useEffect } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { API_OPTIONS } from "../utils/constants";

const TrailerModel = ({ movieId, onClose }) => {
    const [trailerKey, setTrailerKey] = useState(null);

    const fetchTrailer = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS

        );
        const json = await data.json();
        const trailer = json.results.find((video) => video.type === "Trailer");
        setTrailerKey(trailer?.key || null);
    };

    useEffect(() => {
        fetchTrailer();
    }, [movieId]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <div className="bg-gray-900 p-4 rounded-lg w-4/5 md:w-2/3 lg:w-1/2">
                <button
                    className="text-white text-lg absolute top-4 right-4"
                    onClick={onClose}
                >
                    ✖
                </button>
                {trailerKey ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${trailerKey}`}
                        title="Movie Trailer"
                        className="w-full h-64 md:h-96"
                        allow="autoplay; encrypted-media"
                        frameBorder="0"
                    ></iframe>
                ) : (
                    <p className="text-white">Loading trailer...</p>
                )}
            </div>
        </div>
    );
};

export default TrailerModel;
