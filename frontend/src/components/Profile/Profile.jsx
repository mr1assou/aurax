import React, { useEffect } from "react";

import UserDetails from "./UserDetails";
import Header from "../Header";
import Wrapper from "./Wrapper";
import Post from "./Posts";
import { useState } from "react";
import SideBar from "../SideBar";
import UserProfile from "../UserProfile";

function Profile() {
  const [change, setChange] = useState(false);

  return (
    // <div className="w-full  bg-black py-3 px-2 lg:py-5 lg:px-10 min-h-screen">
    //   <Header />
    //   <UserDetails />
    //   <div className="mt-[200px] md:mt-20"></div>
    //   <Wrapper change={change} setChange={setChange} />
    // </div>
    <div
      className="text-[#0F1419] min-h-screen   max-w-[1400px] mx-auto
    flex justify-center"
    >
      <SideBar />
      <div className="w-full sm:w-[75%] mx-auto text-[15px]">
        <UserProfile />
        <Wrapper />
      </div>
    </div>
  );
}

export default Profile;
