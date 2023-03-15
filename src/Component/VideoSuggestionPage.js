import React from 'react';
import { datas } from '../VideoData';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const VideoSuggestionPage = () => {

    const data = datas.items;

  return (
  <>
      {data.map((item) => (
        <Link to={"/watch?v="+item.id}>
          <VideoCard item={item}></VideoCard>
        </Link>
      ))}
      </>
  )
}

export default VideoSuggestionPage