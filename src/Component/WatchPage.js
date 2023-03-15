import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";
import { CommentsData } from "../utils/CommentsData";
import VideoSuggestionPage from "./VideoSuggestionPage";
import { useSelector } from "react-redux";

const WatchPage = () => {
  //getting the id of video
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const {showMenu}=useSelector((state)=>state.app)

  return (
    <div className={showMenu?"bg-gray-500 bg-opacity-25 col-span-11":"col-span-11"}>
      <div className="grid grid-col-12 grid-flow-col">
        <div className="col-span-11">
          <iframe
            width="100%"
            style={{ height: "80vh" }}
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>

          <CommentList comments={CommentsData} />
        </div>
        <div>
          <VideoSuggestionPage />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
