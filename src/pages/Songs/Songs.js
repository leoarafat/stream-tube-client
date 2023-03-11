import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Loader from "../../component/Loader/Loader";
import Song from "./Song";

const Songs = () => {
  const queryKey = ["songs"];
  const queryFn = async () => {
    const response = await fetch(
      "https://stream-tube-server.vercel.app/songs"
    );
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: songsData, isLoading, isError } = useQuery(queryKey, queryFn);
  console.log(songsData);

  if (isLoading) {
    return <div>
      <Loader/>
    </div>;
  }

  if (isError) {
    return <div>{toast.error('Error loading data')}</div>;
  }

  return (
    <div className="">
      <h4 className="text-lg font-semibold mt-5 m-3 text-white">Most Popular Song</h4>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 m-3">
{songsData?.map((song) => (
        <Song song={song} key={song._id} />
      ))}
</div>
    </div>
  );
};

export default Songs;
