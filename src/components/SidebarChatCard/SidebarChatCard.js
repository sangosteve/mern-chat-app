import React from "react";
import "./SidebarChat.css";
import user1_img from "../../assets/images/user2.jpg";

function SidebarChatCard() {
  return (
    <div className="sidebar_chat_card">
      <div className="sidebar_chat_avatar">
        <img src={user1_img} className="sidebar_chat_user_img" />
      </div>
      <div className="sidebar_chat_info">
        <div className="sidebar_chat_username">
          <h3>steve sango</h3>
          last message
        </div>

        <div className="sidebar_chat_moment">
          <small>1 day ago</small>
        </div>
      </div>
    </div>
  );
}

export default SidebarChatCard;
