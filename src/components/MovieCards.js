import React from "react";
import { Img_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  console.log(Img_CDN_URL + posterPath);
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={Img_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCards;
