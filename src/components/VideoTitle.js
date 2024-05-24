import React from "react";
import { CiPlay1 } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[16%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="my-4 md:m-0">
        <buttton className="bg-white hover:bg-opacity-80 text-black py-1 md:py-4 px-6 md:px-12 text-xl rounded-lg w-10 cursor:pointer">
          Play
        </buttton>
        <button className="hidden md:inline-block  bg-gray-500 hover:bg-opacity-80 text-white p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg w-18 cursor:pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
