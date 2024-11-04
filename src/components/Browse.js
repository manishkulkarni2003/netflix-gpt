import { useSelector } from "react-redux"
import useNowPlayingMovie from "../hooks/useNowPlayingMovie"
import usePopularMovie from "../hooks/usePopularMovie"
import useTopRatedMovie from "../hooks/useTopRatedMovie"
import useUpcomingMovie from "../hooks/useUpcomingMovie"
import GptSearch from "./GptSearch"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    useNowPlayingMovie()
    usePopularMovie()
    useTopRatedMovie()
    useUpcomingMovie()

    return (

        <div>
            <Header />
            {
                showGptSearch ? (<GptSearch />) : (<>
                    <MainContainer />
                    <SecondaryContainer />
                </>)
            }


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
