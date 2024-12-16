import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path, onClick }) => {
    if (!poster_path) return null;
    return (
        <div className="w-36 md:w-48 pr-4 cursor-pointer" onClick={onClick}>
            <img src={IMG_CDN_URL + poster_path} alt="Movie Poster" className="rounded-lg" />
        </div>
    );
};

export default MovieCard;
