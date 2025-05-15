import React, { useEffect, useState } from "react";
import event8 from "/assets/image2.jpg";
import piano from "/assets/login_image.jpg";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import axiosInstance from "../../Axios";
import { useParams } from "react-router-dom";

function UserDetails({}) {
  const { id } = useParams();
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get("/getUser", {
        params: { user_id: id },
      });
      setUser(response.data[0]);
    };
    fetchData();
  }, []);

  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="w-[70%] mx-auto mt-10 px-4 ">
      {/* Header */}
      <div className="flex items-center gap-6">
        <img
          src="/assets/image2.jpg"
          alt="profile"
          className="w-24 h-24 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-2xl font-semibold bg-red">
            {user?.first_name} {user?.last_name}
          </h2>
          <p className="text-gray-500 text-sm">
            {user?.first_name} • Content Creator
          </p>
          <button className="mt-2 px-4 py-1 border rounded-md font-medium hover:bg-gray-100">
            Follow
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-8 mt-6 text-sm text-center">
        <div>
          <p className="font-semibold text-lg">1.2M</p>
          <p className="text-gray-500">Followers</p>
        </div>
        <div>
          <p className="font-semibold text-lg">300</p>
          <p className="text-gray-500">Following</p>
        </div>
        <div>
          <p className="font-semibold text-lg">12.8M</p>
          <p className="text-gray-500">Likes</p>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-4">
        <p className="text-gray-700">
          🖤 Storyteller & Vibes Curator. DM for collab 💌
        </p>
        <a
          href="https://lynk.bio/kniza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm mt-1 block"
        >
          lynk.bio/{user?.first_name}
        </a>
      </div>

      {/* Tabs */}
      <div className="flex border-t mt-6">
        {["posts", "liked", "saved"].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 text-center capitalize ${
              activeTab === tab
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-full aspect-square bg-gray-300 rounded-md">
            {/* Replace with video thumbnails */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
