import React from "react";
import "./ChatWindow.css";
import { GiPaperClip } from "react-icons/gi";
import { BiMailSend } from "react-icons/bi";

const ChatWindow = () => {
  return (
    <div className="chat_window">
      <div className="chats_section"></div>

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
