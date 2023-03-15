import React from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

const Body = () => {
  const { pathname } = useLocation();
  

  //getting the status of menu -open or close
  const { showMenu } = useSelector((state) => state.app);
  return (
    <div className="grid grid-flow-col">
      <div className="h-[100vh] col-span-1 bg-fixed">
        <Sidebar></Sidebar>
      </div>

      {pathname !== "/watch" && (
        <div className={showMenu ? "ml-60" : "ml-28"}></div>
      )}

      {/* For Routing we have cardgrop in home page, videos and comments in watch page */}
      <Outlet />
    </div>
  );
};

export default Body;
