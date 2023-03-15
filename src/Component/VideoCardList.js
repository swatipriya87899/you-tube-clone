import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/Constant";
import { datas } from "../VideoData";
import VideoCard from "./VideoCard";

const VideoCardList = () => {
  const data = datas.items;
  return (
    <div className="flex flex-wrap">
      {data.map((item) => (
        <Link to={"/watch?v="+item.id}>
          <VideoCard item={item}></VideoCard>
        </Link>
      ))}
    </div>
  );
};

export default VideoCardList;
