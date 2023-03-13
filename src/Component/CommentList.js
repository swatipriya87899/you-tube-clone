import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, i) => {
        return (
          <div key={i}>
            <Comment {...comment}></Comment>

            <div className="ml-7">
              <CommentList comments={comment.replies}></CommentList>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
