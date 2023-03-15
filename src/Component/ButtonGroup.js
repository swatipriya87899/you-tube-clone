import React from "react";
import Button from "./Button";

const ButtonGroup = () => {
  const buttons = [
    "All",
    "Programming",
    "Music",
    "Thoughts",
    "Live",
    "Gaming",
    // "Motivation",
    // "Tourism",
    // "Gadgets",
    "Live",
  ];
  return (
    <div className="h-9 bg-white">
      <div className="flex">
        {buttons.map((title) => (
          <Button title={title}></Button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;
