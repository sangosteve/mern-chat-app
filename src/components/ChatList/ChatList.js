import React from "react";
import "./ChatList.css";
import user1_img from "../../assets/images/user2.jpg";

function SidebarChatCard({ item }) {
  return (
    <div className="sidebar_chat_card">
      <div className="sidebar_chat_avatar">
        <img src={item.image} className="sidebar_chat_user_img" />
      </div>
      <div className="sidebar_chat_info">
        <div className="sidebar_chat_username">
          <h4>{item.name}</h4>
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
