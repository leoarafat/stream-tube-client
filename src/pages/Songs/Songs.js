import { useQuery } from "@tanstack/react-query";
import React from "react";
import Song from "./Song";

const Songs = () => {
  const queryKey = ["songs"];
  const queryFn = async () => {
    const response = await fetch(
      "http://localhost:5000/songs"
    );
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: songsData, isLoading, isError } = useQuery(queryKey, queryFn);
  console.log(songsData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div >
      <h4 className="text-lg font-semibold mt-5 mb-2">Most Popular Song</h4>
<div className="md:grid grid-cols-3 lg:grid-cols-5 gap-3">
{songsData?.map((song) => (
        <Song song={song} key={song._id} />
      ))}
</div>
    </div>
  );
};

export default Songs;
