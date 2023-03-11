import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Loader from "../../component/Loader/Loader";
import Movie from "./Movie";

const Movies = () => {
  const queryKey = ["movies"];
  const queryFn = async () => {
    const response = await fetch(
      "https://stream-tube-server.vercel.app/movies"
    );
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: moviesData, isLoading, isError } = useQuery(queryKey, queryFn);
  console.log(moviesData);

  if (isLoading) {
    return <div>
      <Loader/>
    </div>;
  }

  if (isError) {
    return <div>{toast.error('Error loading data')}</div>;
  }

  return (
    <div className="mb-10">
      <h4 className="text-lg font-semibold mt-5 m-3 text-white">Most Popular Movie</h4>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 m-3">
{moviesData?.map((movie) => (
        <Movie movie={movie} key={movie._id} />
      ))}
</div>
    </div>
  );
};

export default Movies;
