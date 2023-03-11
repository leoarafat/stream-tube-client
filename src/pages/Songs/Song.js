import React, { useState } from "react";
import { Link } from "react-router-dom";

const Song = ({ song }) => {
  const { thumbNail, title, _id, Views } = song;
  const [ViewCount, setViewCount] = useState(Views);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleView = (Id) => {
    // console.log("hit outside");
    fetch(`https://stream-tube-server-leoarafat.vercel.app/songView/${Id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          setViewCount((prevViewCount) => prevViewCount + 1);
        }
      });
  };
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="object-cover w-full h-[650px] transition duration-500 ease-in-out transform hover:scale-105"
        src={thumbNail}
        alt="card"
      />
      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <Link to={`/song/${_id}`}>
            <button
              onClick={() => handleView(_id)}
              className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-300"
            >
              View song
            </button>
          </Link>
          
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
      
      </div>
    </div>
  );
};

export default Song;
