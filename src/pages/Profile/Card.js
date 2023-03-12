import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { SlUserFollow } from "react-icons/sl";
import { TfiComment } from "react-icons/tfi";
import ReactPlayer from "react-player";
import Swal from "sweetalert2";
import Loader from "../../component/Loader/Loader";
import { AuthContext } from "../../context/ContextProvider/ContextProvider";
import MovieComment from "../Movies/MovieComment";

const Card = ({ profile }) => {
  const {
    Views,
    title,
    channel,
    description,
    like,
    posted_date,
    videoLink,
    _id,
  } = profile?.item;
  const [comment, setComment] = useState("");
  const [likeCount, setLikeCount] = useState(like);

  // console.log(comment);
  const { user } = useContext(AuthContext);
  const queryKey = ["moviesComment"];
  const queryFn = async () => {
    const response = await fetch(
      `https://stream-tube-server-leoarafat.vercel.app/movieComment/${_id}`
    );
    const jsonData = await response.json();
    return jsonData;
  };

  const {
    data: moviesCommentData,
    isLoading,
    isError,
  } = useQuery(queryKey, queryFn);

  const handleLike = (Id) => {
    // console.log("hit outside");
    fetch(`https://stream-tube-server-leoarafat.vercel.app/movieLike/${Id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          setLikeCount((prevLikeCount) => prevLikeCount + 1);
        }
      });
  };

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

  return (
    <div>
      <div className="">
        <div className="m-2">
          <div className="card bg-gradient-to-r from-[#006663] to-[#111111] shadow-xl">
            <ReactPlayer width={"100%"} controls url={videoLink} />
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <div className="">
                <p className="flex items-center text-lg">
                  <BsCalendarEvent className="h-6 w-6" />
                  <span>{posted_date} year ago</span>
                </p>
                <p className="flex items-center text-lg">
                  <TfiComment className="h-6 w-6" />
                  <span className="ml-1">0 Comment</span>
                </p>
                <p className="flex items-center text-lg">
                  <GrView className="h-6 w-6" />
                  <span className="ml-1">{Views} Viewers</span>
                </p>
              </div>
              <ul className="flex justify-center items-center shadow-md  rounded-sm">
                <li onClick={() => handleLike(_id)} className="p-2 mr-5">
                  <div className="indicator">
                    <AiOutlineLike className="w-8 h-8" />

                    <span className="badge badge-sm indicator-item">
                      {likeCount}
                    </span>
                  </div>
                </li>
                <li className="p-2 mr-5">
                  <div className="indicator">
                    <AiOutlineDislike className="w-8 h-8" />

                    <span className="badge badge-sm indicator-item"></span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="p-5">
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">{channel}</h1>
                <p>
                  <SlUserFollow className="h-8 w-8" />
                </p>
              </div>
              <hr className="mt-2" />
              <div>
                <h2 className="text-xl">Song description:</h2>{" "}
                <p className="text-lg">{description}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-span-4">
          <div>
            <div>
              {moviesCommentData?.map((comment) => (
                <MovieComment
                  key={comment._id}
                  _id={comment._id}
                  comment={comment.comment}
                  postId={comment.postId}
                  time={comment.time}
                />
              ))}
            </div>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 rounded-lg p-4 hover:shadow-lg"
            >
              <textarea
                value={comment}
                onChange={handleCommentChange}
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Write a comment"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
