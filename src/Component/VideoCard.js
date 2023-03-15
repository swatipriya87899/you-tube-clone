import React from 'react';
import { useLocation } from 'react-router-dom';


const VideoCard = ({item}) => {
  const {pathname} = useLocation();


  return (
    <div className={pathname=='/watch'? 'w-96 flex p-4':'m-5 w-72'} key={item.id}>
        <img src={item.snippet.thumbnails.medium.url} className={pathname=='/watch'? "w-40 h-24 rounded-md":"rounded-md"}></img>
        <div className={pathname=='/watch'?"ml-2":""}>
        <div className='font-semibold'>{pathname=='/watch'?item.snippet.title.substr(0,25):item.snippet.title.substr(0,5045)}</div>
        <div className='text-slate-500'>{item.snippet.channelTitle}</div>
        <div className='text-slate-600 text-md'>{parseInt(item.statistics.viewCount/100000)}K views</div>
        </div>
        
    </div>
  )
}

export default VideoCard