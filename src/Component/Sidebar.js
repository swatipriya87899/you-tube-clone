import React from 'react';
import { AiFillHome,AiOutlineYoutube,AiOutlineVideoCamera,TiStopwatch } from "react-icons/ai";
import {BsStopwatch,BsFillCaretRightSquareFill} from "react-icons/bs"



const Sidebar = () => {
  const feature_primary=[{name:"Home", logo:AiFillHome},{name:"Shorts", logo:AiOutlineVideoCamera},{name:"Subscription", logo:AiOutlineYoutube}]
  const feature_secondary=[{name:"Library", logo:AiFillHome},{name:"History", logo: BsStopwatch},{name:"Your videos", logo:BsFillCaretRightSquareFill},{name:"Library", logo:AiFillHome},{name:"History", logo:AiOutlineVideoCamera},{name:"Your videos", logo:AiOutlineYoutube}]

  

  return (
    <div className='text-base'>
      {
        feature_primary.map((e,i)=><div className='flex items-center  m-3 p-2  hover:bg-gray-200 rounded-xl' key={i}><e.logo size={20}/><div className='pl-3'>{e.name}</div></div>)
      }
      <hr/>
      {
        feature_secondary.map((e,i)=><div className='flex items-center  m-3 p-2 ' key={i}><e.logo size={20}/><div className='pl-3'>{e.name}</div></div>)
      }
    </div>
  )
}

export default Sidebar