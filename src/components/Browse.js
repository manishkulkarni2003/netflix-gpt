import useNowPlayingMovie from "../hooks/useNowPlayingMovie"
import usePopularMovie from "../hooks/usePopularMovie"
import useTopRatedMovie from "../hooks/useTopRatedMovie"
import useUpcomingMovie from "../hooks/useUpcomingMovie"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {

    useNowPlayingMovie()
    usePopularMovie()
    useTopRatedMovie()
    useUpcomingMovie()

    return (

        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/* 
            Main container
                -Video Background
                -videoTitle

            secondary container
                -Movie list *n
                -cards *n
            */}


        </div>
    )
}

export default Browse
