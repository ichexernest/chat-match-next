"use client";

import Image from "next/image";
import Chatroom from "./chatroom/page";
import Explore from "./explore/explore";
import Profile from "./profile/page";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("explore");

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {currentPage === "explore" && <Explore />}
        {currentPage === "chatroom" && <Chatroom />}
        {currentPage === "profile" && <Profile />}
      </main>

      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex justify-around">
          <li>
            <button onClick={() => setCurrentPage("explore")}>Explore</button>
          </li>
          <li>
            <button onClick={() => setCurrentPage("chatroom")}>Chatroom</button>
          </li>
          <li>
            <button onClick={() => setCurrentPage("profile")}>Profile</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
