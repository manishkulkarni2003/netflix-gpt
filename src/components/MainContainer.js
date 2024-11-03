import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {
    const movie = useSelector((store) => store.movie?.nowPlayingMovie);
    if (!movie) return;

    const mainMovie = movie[5];
    console.log(mainMovie)
    const { original_title, overview, id } = mainMovie

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer
