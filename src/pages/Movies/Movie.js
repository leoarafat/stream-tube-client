import React from "react";

const Movie = ({ movie }) => {
  const { thumbNail, title,_id } = movie;
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
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
          <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-300">
            View Movie
          </button>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default Movie;
