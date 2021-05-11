import React from "react";
import "./Sidebar.css";
import SidebarChatCard from "../SidebarChatCard/SidebarChatCard";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarChatCard />
      <SidebarChatCard />
    </div>
  );
};
export default Sidebar;
