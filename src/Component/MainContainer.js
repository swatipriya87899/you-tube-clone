import React from "react";
import ButtonGroup from "./ButtonGroup";
import VideoCardList from "./VideoCardList";

const MainContainer = () => {
  return (
    <div className="col-span-8">
      <ButtonGroup></ButtonGroup>
      <VideoCardList></VideoCardList>
    </div>
  );
};

export default MainContainer;
