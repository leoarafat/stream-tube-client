// api.js

export const fetchSongComment = async (id) => {
  const response = await fetch(
    `https://stream-tube-server-leoarafat.vercel.app/songComment/${id}`
  );
  const jsonData = await response.json();
  return jsonData;
};

export const postSongComment = async (commentInfo) => {
  const response = await fetch(
    `https://stream-tube-server-leoarafat.vercel.app/songComment`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    }
  );
  const jsonData = await response.json();
  return jsonData;
};

export const updateSongLike = async (id, email) => {
  const response = await fetch(
    `https://stream-tube-server-leoarafat.vercel.app/songLike/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );
  const jsonData = await response.json();
  return jsonData;
};

export const shareSong = async (postData) => {
  const response = await fetch(
    "https://stream-tube-server-leoarafat.vercel.app/shareSong",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    }
  );
  const jsonData = await response.json();
  return jsonData;
};
