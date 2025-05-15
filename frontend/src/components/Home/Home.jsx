import React from "react";
import Posts from "./Posts";
import Header from "../Header";
import SocialFeed from "./SocialFeed";
import SideBar from "../SideBar";
import { useState } from "react";
import Wrapper from "./Wrapper";
import Widgets from "../Widgets";
import UserProfile from "../UserProfile";
import UserDetails from "../Profile/UserDetails";
function Home() {
  return (
    <div
      className="text-[#0F1419] min-h-screen   max-w-[1400px] mx-auto
    flex justify-center"
    >
      <SideBar />
      {/* <Header /> */}
      <Wrapper />
      {/* <UserProfile /> */}
      {/* <UserDetails /> */}
      <Widgets />
    </div>
  );
}

export default Home;
