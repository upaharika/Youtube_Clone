import React from "react";
import { tags } from "../constant";
import Tag from "./Tag";

const TagList = () => {
  return (
    <div className="flex gap-3 mt-5 px-10 py-5">
      {tags.map((tag) => (
        <Tag tagName={tag} key={tag} />
      ))}
    </div>
  );
};

export default TagList;
