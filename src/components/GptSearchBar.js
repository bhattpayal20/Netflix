import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addGptMovieResult(json));
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //make an api call to GPT API and get movie result
    // const gptQuery =
    //   "Act as a Movie Recommendation System and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example given ahead, Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (!gptResults.choices) {
    //   //todo : write error handling
    // }

    // console.log(gptResults.choices?.[0]?.message?.content);

    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    //for each movie i will search tmdb api

    // const promiseArray = gptMovies.map((movie) => searchMovieTMDB());

    // const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
    searchMovieTMDB(searchText.current.value);
  };

  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 mx-2 my-4 p-2 md:m-4 md:py-2 md:px-4 bg-red-700 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
