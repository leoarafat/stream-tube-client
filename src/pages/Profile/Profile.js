import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider/ContextProvider";
import ShareSong from "../ShareSong/ShareSong";
import Card from "./Card";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [sharesMovie, setSharesMovie] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/sharePost?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSharesMovie(data);
      });
  }, [user?.email]);

  return (
    <div className=" bg-gradient-to-r from-[#141e30] to-[#243b55]">
      <div className="md:grid grid-cols-2 gap-3">
      {!user?.email && (
        <p className="text-3xl text-center">
          Please Login and see profile{" "}
          <span className="underline text-primary">
            <Link to={"/login"}>Login</Link>
          </span>{" "}
        </p>
      )}
      {sharesMovie?.map((profile) => (
        <Card profile={profile} key={profile._id} />
      ))}
      </div>

      <ShareSong />
    </div>
  );
};

export default Profile;
