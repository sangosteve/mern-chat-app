import React, { useState, useEffect } from "react";
import "./ChatWindow.css";
import { GiPaperClip } from "react-icons/gi";
import { BiMailSend } from "react-icons/bi";
import ChatItem from "../ChatItems/ChatItem";

const ChatWindow = () => {
  const [chatData, setChatData] = useState([
    {
      msgID: 1,
      userImg: "https://i.pravatar.cc/150?img=5",
      type: "other",
      msg: "Hey bro hwzit",
      msgTime: "16 mins ago",
      lastSeen: "an hour ago",
    },
    {
      msgID: 2,
      userImg: "https://i.pravatar.cc/150?img=7",
      type: "me",
      msg: "Hey bro hwzit",
      msgTime: "16 mins ago",
      lastSeen: "an hour ago",
    },
    {
      msgID: 3,
      userImg: "https://i.pravatar.cc/150?img=5",
      type: "other",
      msg: "Hey bro hwzit",
      msgTime: "16 mins ago",
      lastSeen: "an hour ago",
    },
    {
      msgID: 4,
      userImg: "https://i.pravatar.cc/150?img=7",
      type: "me",
      msg: "Hey bro hwzit",
      msgTime: "16 mins ago",
      lastSeen: "an hour ago",
    },
    {
      msgID: 5,
      userImg: "https://i.pravatar.cc/150?img=7",
      type: "me",
      msg: "Hey bro hwzit",
      msgTime: "16 mins ago",
      lastSeen: "an hour ago",
    },
  ]);
  // const [message, setMessage] = useState("");
  // const sendMessage = () => {
  //   console.log("sending message...");
  //   chatData.push({
  //     msgID: 6,
  //     userImg: "https://i.pravatar.cc/150?img=7",
  //     type: "me",
  //     msg: message,
  //     msgTime: new Date(),
  //     lastSeen: "An Hour Ago",
  //   });

  //   setChatData([...chatData]);
  // };
  // const handleUserInput = (e) => {
  //   setMessage(e.target.value);
  // };

  return (
    <div className="chat_window">
      <div className="chats_section">
        {chatData.map((chatItem) => (
          <ChatItem item={chatItem} key={chatItem.msgID} />
        ))}
      </div>

      <div className="input_wrapper">
        <input type="text" id="message_input" placeholder="Type something" />
        <button className="button" id="btn-attach">
          <GiPaperClip />
        </button>
        <button className="button" id="btn-send">
          <BiMailSend />
        </button>
      </div>
    </div>
  );
};
export default ChatWindow;
