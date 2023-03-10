import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { GrView } from "react-icons/gr";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { SlUserFollow } from "react-icons/sl";
import { TfiComment } from "react-icons/tfi";
import ReactPlayer from "react-player";
import { AuthContext } from "../../context/ContextProvider/ContextProvider";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import SongComment from "./SongCpmment";
const PlaySong = () => {
  const { user } = useContext(AuthContext);
    const song = useLoaderData();
    const {
        Views,
        title,
        channel,
        description,
        like,
        posted_date,
        videoLink,
        _id
      } = song;
      
  const [comment, setComment] = useState("");
  const [likeCount, setLikeCount] = useState(like);
  
  
  const queryKey = ["songComment"];
  const queryFn = async () => {
    const response = await fetch(`http://localhost:5000/songComment/${_id}`);
    const jsonData = await response.json();
    return jsonData;
  };
  const {
    data: songCommentData,
    isLoading,
    isError,
    refetch,
  } = useQuery(queryKey, queryFn);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting comment: ${comment}`);
    const commentInfo = {
      userName: user?.displayName,
      comment,
      postId: _id,
      time: new Date(),
    };
    // console.log('comment')

    fetch(`http://localhost:5000/songComment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("hit inside");
        if (data.acknowledged) {
          // console.log(data);

          refetch();
          toast.success("Comment added successful");
        }
      });
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const handleLike = (Id) => {
    // console.log("hit outside");
    fetch(`http://localhost:5000/songLike/${Id}`, {
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
  return (
    <div>
      <div className="md:grid grid-cols-12">
        <div className="col-span-8">
          <div className="card bg-base-100 shadow-xl">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              controls
              playing
              url={videoLink}
            />
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
              <ul className="flex justify-center items-center shadow-md bg-base-100 rounded-sm">
                <li className="p-2 mr-5">
                  <div className="indicator">
                    <AiOutlineLike onClick={()=>handleLike(_id)} className="w-8 h-8" />

                    <span className="badge badge-sm indicator-item">{likeCount}</span>
                  </div>
                </li>
                <li className="p-2 mr-5">
                  <div className="indicator">
                    <AiOutlineDislike className="w-8 h-8" />

                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </li>
                <li>
                  <AiOutlineShareAlt className="w-8 h-8" />
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
        <div className="col-span-4">
          <div>
          <div>
              {songCommentData?.map((comment) => (
                <SongComment
                  key={comment._id}
                  _id={comment._id}
                  comment={comment.comment}
                  postId={comment.postId}
                  name={comment.userName}
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
        </div>
      </div>
    </div>
  );
};

export default PlaySong;
