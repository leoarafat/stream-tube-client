import { useQuery } from "@tanstack/react-query";
import React from "react";
import Movie from "./Movie";

const Movies = () => {
  const queryKey = ["movies"];
  const queryFn = async () => {
    const response = await fetch(
      "http://localhost:5000/movies"
    );
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: moviesData, isLoading, isError } = useQuery(queryKey, queryFn);
  console.log(moviesData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div >
      <h4 className="text-lg font-semibold mt-5 mb-2">Most Popular Movie</h4>
<div className="md:grid grid-cols-3 lg:grid-cols-5 gap-3">
{moviesData?.map((movie) => (
        <Movie movie={movie} key={movie._id} />
      ))}
</div>
    </div>
  );
};

export default Movies;
