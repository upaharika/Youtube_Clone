import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/chatSlice";
import { generator, makeid } from "./helper";

const ChatContainer = () => {
  const [text, setText] = useState("");
  const chat = useSelector((store) => store.chat);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addItem(generator() + ": " + makeid(20)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="h-[600px] w-full ml-10 border border-gray-200 overflow-y-scroll flex flex-col-reverse">
        {chat?.map((message) => (
          <div
            className="flex justify-start m-2 p-3 shadow-lg font-mono"
            key={message}
          >
            {message}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addItem("User Input: " + makeid(2)));
            setText("");
          }}
        >
          <input
            className="bg-orange-100 m-5 w-[20rem] p-3 border border-black rounded-2xl"
            type="text"
            value={text}
            placeholder="let's chat"
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default ChatContainer;
