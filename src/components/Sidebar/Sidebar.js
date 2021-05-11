import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarChatCard from "../ChatList/ChatList";

const Sidebar = () => {
  const [usersList, setUsersList] = useState([
    {
      id: 1,
      name: "Elen Hobbs",
      image: "https://i.pravatar.cc/150?img=16",
      isActive: true,
      isOnline: true,
    },
    {
      id: 2,
      name: "Elen Hobbs",
      image: "https://i.pravatar.cc/150?img=43",
      isActive: true,
      isOnline: true,
    },
    {
      id: 3,
      name: "Elen Hobbs",
      image: "https://i.pravatar.cc/150?img=13",
      isActive: true,
      isOnline: true,
    },
    {
      id: 4,
      name: "Elen Hobbs",
      image: "https://i.pravatar.cc/150?img=9",
      isActive: true,
      isOnline: true,
    },
    {
      id: 5,
      name: "Elen Hobbs",
      image: "https://i.pravatar.cc/150?img=11",
      isActive: true,
      isOnline: true,
    },
  ]);
  return (
    <div className="sidebar">
      {usersList.map((userItem) => (
        <SidebarChatCard item={userItem} key={userItem.id} />
      ))}
    </div>
  );
};
export default Sidebar;
