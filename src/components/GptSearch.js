import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestion from "./GptMovieSuggestion"
import { BACKGROUND_IMG } from "../utils/constants"


const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10 ">
                <img src={BACKGROUND_IMG} alt="Background" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GptSearch
