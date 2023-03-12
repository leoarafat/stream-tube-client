import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Loader from "../../component/Loader/Loader";
import Movie from "./Movie";
import Lottie from "react-lottie";
import MovieAnim from "../../component/MovieAnimation/MovieAnimation.json";

const Movies = () => {
  const queryKey = ["movies"];
  const queryFn = async () => {
    const response = await fetch(
      "https://stream-tube-server-leoarafat.vercel.app/movies"
    );
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: moviesData, isLoading, isError } = useQuery(queryKey, queryFn);
  console.log(moviesData);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div>{toast.error("Error loading data")}</div>;
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MovieAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="mb-10">
      <Lottie
        options={defaultOptions}
        width={350}
        animationData={MovieAnim}
      ></Lottie>
      <h4 className="text-lg font-semibold mt-5 m-3 text-white text-center">
        Most Popular Movie
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 m-3">
        {moviesData?.map((movie) => (
          <Movie movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
