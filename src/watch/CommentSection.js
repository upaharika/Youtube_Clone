import React from "react";
import Comment from "./Comment";
import { comments } from "../constant";

const renderComments = (comments) =>
  comments.map((comment) => (
    <div>
      <Comment comments={comment} />
      {comment?.replies && (
        <div className="pl-2 ml-5 border border-gray-200 rounded-md">
          {renderComments(comment?.replies)}
        </div>
      )}
    </div>
  ));
const CommentSection = () => {
  return <div className="text-left pl-10">{renderComments(comments)}</div>;
};

export default CommentSection;
