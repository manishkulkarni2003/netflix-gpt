import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageConstants";
import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GEMINI_KEY } from "../utils/constants";
// Correct import of the action creator
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch()
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    //search Movie In TmDb Api
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();

        return json.results;
    }

    const handleGptSearchClick = async () => {
        try {
            console.log(searchText.current.value);

            // Initialize GenAI with API key
            const genAI = new GoogleGenerativeAI(GEMINI_KEY);

            // Create the user query prompt
            const prompt = `Act as a Movie Recommendation system and suggest some movies for the query: ${searchText.current.value}. Only give me names of 5 movies, comma-separated like the example result: Stree, Sholay, Golmaal, 3 Idiots, Dhamaal.`;

            // Fetch the model - note the correct model specification
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            // Generate content using the correct input structure
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            console.log(text);

            // Process the response text (extract movie names)
            const movieNames = text.split(',').map(name => name.trim());
            console.log(movieNames);

            //For each Movie I will Search TmDb Api
            const promiseArray = movieNames.map(movie => searchMovieTMDB(movie))
            const TMDBresults = await Promise.all(promiseArray);
            console.log(TMDBresults);


            dispatch(addGptMovieResult({ movieNames: movieNames, movieResults: TMDBresults }))

        } catch (error) {
            console.error("Error with GenAI search:", error);
        }
    };

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={searchText}
                    type="text"
                    className="p-4 m-4 col-span-9"
                    placeholder={language[langKey].gptSearchPlaceholder}
                />
                <button
                    className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
                    onClick={handleGptSearchClick}
                >
                    {language[langKey].search}
                </button>
            </form>
        </div>
    );
}

export default GptSearchBar;