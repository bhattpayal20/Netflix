import React from "react";
import { useSelector } from "react-redux";
import MovieCards from "./MovieCards";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovies } = useSelector((store) => store.gpt);
  console.log(gptMovies);

  if (!gptMovies) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        <MovieList
          title={gptMovies.results[0].title}
          movies={gptMovies.results}
        />
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
