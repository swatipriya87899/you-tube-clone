import React, { useEffect,useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/Constant';
import {datas} from '../utils/VideoData'
import VideoCard from '../VideoCard';

const VideoCardList = () => {
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   getData();
  // },[])

  // const getData= async()=>{
  //   const datas=await fetch(YOUTUBE_VIDEOS_API);
  //   const json=await datas.json();
  //  setData(json.items)
  // }
  const data=datas.items
  return (
    <div className='flex flex-wrap justify-center'>
      {data.map((item)=><div><VideoCard item={item}></VideoCard></div>)}
    </div>
  )
}

export default VideoCardList