import "./app.css";
import React, { useState } from "react";
import { useEffect } from "react";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBB2wQWDQd4VOrpBFJyaYr-oE8yUsiWoh4", requestOptions)
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []); // mount가 될때만 호출
  return <VideoList videos={videos} />;
}

export default App;
