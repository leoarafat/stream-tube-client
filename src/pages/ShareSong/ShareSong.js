import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/ContextProvider/ContextProvider";
import SongCard from "./SongCard";

const ShareSong = () => {
  const [sharesSong, setSharesSong] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/shareSong?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSharesSong(data);
      });
  }, [user?.email]);
  return (
    <div className="">
      <div className="md:grid grid-cols-2 gap-3">
        {sharesSong?.map((song) => (
          <SongCard song={song} key={song._id} />
        ))}
      </div>
    </div>
  );
};

export default ShareSong;
