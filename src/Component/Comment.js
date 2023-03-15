import React from "react";
import { VscAccount } from "react-icons/vsc";
import { BsHandThumbsUp,BsHandThumbsDown } from "react-icons/bs";


const Comment = ({name,time,comment,likes}) => {
  return (
   
    <div className="flex items-center">
      <VscAccount size={40}/>
      <div className="ml-3 mt-5">
        <span className='font-semibold'>{name}</span><span className='text-slate-700 ml-2 text-sm'>{time}</span>
        <div className='-mt-1'>{comment}</div>
        <div className="flex items-center"><BsHandThumbsUp size={18}/>{4}<div className="ml-3"><BsHandThumbsDown size={18}/></div></div>
      </div>
      
    </div>
    
   
  );
};

export default Comment;
