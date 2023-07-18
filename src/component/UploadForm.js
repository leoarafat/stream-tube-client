import React, { useState } from "react";

function UploadForm() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleVideoSelect = (event) => {
    setSelectedVideo(event.target.files[0]);
  };

  const handleThumbnailSelect = (event) => {
    setSelectedThumbnail(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Upload video to YouTube
    const youtubeEndpoint =
    `https:www.googleapis.com/upload/youtube/v3/videos?part=snippet,status&key=${process.env.REACT_APP_VIDEO_KEY}`
    const youtubeApiKey = `${process.env.REACT_APP_VIDEO_KEY}`;

    const videoFormData = new FormData();
    videoFormData.append("video", selectedVideo);

    fetch(`${youtubeEndpoint}?part=snippet,status&key=${youtubeApiKey}`, {
      method: "POST",
      body: videoFormData,
    })
      .then((response) => response.json())
      .then((data) => {
        const videoId = data.id;
        const videoLink = `https://www.youtube.com/watch?v=${videoId}`;

        // Upload thumbnail to imgbb
        const imgbbEndpoint = "https://api.imgbb.com/1/upload";
        const imgbbApiKey = `${process.env.REACT_APP_Iimgbb_key}`;

        const thumbnailFormData = new FormData();
        thumbnailFormData.append("image", selectedThumbnail);
        thumbnailFormData.append("key", imgbbApiKey);

        fetch(imgbbEndpoint, {
          method: "POST",
          body: thumbnailFormData,
        })
          .then((response) => response.json())
          .then((data) => {
            const thumbNail = data.data.url;

            // Upload form data to server
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("videoUrl", videoLink);
            formData.append("thumbnailUrl", thumbNail);

            fetch("http://localhost:5000/api/upload", {
              method: "POST",
              body: formData,
            })
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => console.error(error));
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-8">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="video"
            >
              Video:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              accept="video/*"
              onChange={handleVideoSelect}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="thumbnail"
            >
              Thumbnail:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              accept="image/*"
              onChange={handleThumbnailSelect}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </>
  );
}
export default UploadForm;
