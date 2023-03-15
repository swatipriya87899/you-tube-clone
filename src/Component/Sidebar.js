import React from "react";
import {
  AiFillHome,
  AiOutlineYoutube,
  AiOutlineVideoCamera,
  TiStopwatch,
} from "react-icons/ai";
import { BsStopwatch, BsFillCaretRightSquareFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Sidebar = () => {
  //SideBar Description
  const feature_primary = [
    { name: "Home", logo: AiFillHome },
    { name: "Shorts", logo: AiOutlineVideoCamera },
    { name: "Subscription", logo: AiOutlineYoutube },
  ];
  const feature_secondary = [
    { name: "Library", logo: AiFillHome },
    { name: "History", logo: BsStopwatch },
    { name: "Your videos", logo: BsFillCaretRightSquareFill },
    { name: "Library", logo: AiFillHome },
    { name: "History", logo: AiOutlineVideoCamera },
    { name: "Your videos", logo: AiOutlineYoutube },
  ];


  //For Modal Effect
  const { showMenu } = useSelector((state) => state.app);

  return (
    <div className={showMenu?"bg-white":"fixed"}>
      
      {feature_primary.map((e, i) => (
        <div
          className={
            showMenu
              ? "flex items-center  m-3 p-2  hover:bg-gray-200 rounded-xl"
              : " flex flex-col justify-center m-3 p-2 items-center"
          }
          key={i}
        >
          <e.logo size={20} />
          <div className={showMenu ? "pl-3" : "pl-0"}>{e.name}</div>
        </div>
      ))}
      <hr />
      {showMenu &&
        feature_secondary.map((e, i) => (
          <div className="flex items-center  m-3 p-2 " key={i}>
            <e.logo size={20} />
            {showMenu && <div className="pl-3">{e.name}</div>}
          </div>
        ))}
    </div>
    // <div class="fixed z-10 inset-0 overflow-y-auto">
    //   <div class="">
    //     <div class="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
    //     <div class="bg-white rounded-lg p-6">
    //       <h2 class="text-lg font-medium mb-4">Modal Title</h2>
    //       <p class="mb-4">Modal content goes here...</p>
    //       <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    //         Close
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Sidebar;
