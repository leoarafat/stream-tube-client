import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import Loader from "../../component/Loader/Loader";
import Song from "./Song";
import Lottie from "react-lottie";
import SongAnim from "../../component/MuscAnimation/MusicAnimation.json";

const Songs = () => {
  const queryKey = ["songs"];
  const queryFn = async () => {
    const response = await fetch(
      "https://stream-tube-server-leoarafat.vercel.app/songs"
    );
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: songsData, isLoading, isError } = useQuery(queryKey, queryFn);
  console.log(songsData);

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
    animationData: SongAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="">
      <Lottie
        options={defaultOptions}
        width={350}
        animationData={SongAnim}
      ></Lottie>
      <h4 className="text-lg font-semibold mt-5 m-3 text-white text-center">
        Most Popular Song
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 m-3">
        {songsData?.map((song) => (
          <Song song={song} key={song._id} />
        ))}
      </div>
    </div>
  );
};

export default Songs;
