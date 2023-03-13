import React from 'react'

const VideoCard = ({item}) => {
  return (
    <div className='m-5 w-80' key={item.id}>
        <img src={item.snippet.thumbnails.medium.url} className="rounded-md"></img>
        <div className='font-semibold'>{item.snippet.title.substr(0,5045)}</div>
        <div className='text-slate-500'>{item.snippet.channelTitle}</div>
        <div className='text-slate-600 text-md'>{parseInt(item.statistics.viewCount/100000)}K views</div>
    </div>
  )
}

export default VideoCard