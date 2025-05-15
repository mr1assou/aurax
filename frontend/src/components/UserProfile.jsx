import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../Axios";

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("posts");
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/getUser", {
          params: { user_id: id },
        });
        setUser(response.data[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleFollowToggle = () => {
    setFollowed((prev) => !prev);
    // Optionally: send request to backend
  };

  return (
    <div className="w-full ">
      {/* Cover Background Image */}
      <div className="relative w-full h-64 sm:h-96 md:h-64 bg-gray-200">
        <img
          src="/assets/event7.jpg"
          alt="cover"
          className="w-full h-full object-cover"
        />

        {/* Profile Image */}
        <div className="absolute -bottom-16 left-6 md:left-10">
          <img
            src="/assets/image2.jpg"
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="mt-24 px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-black">
            {user?.first_name} {user?.last_name}
          </h2>
        </div>
        <div className="mt-4 sm:mt-0">
          <button
            onClick={handleFollowToggle}
            className={`px-6 py-1 border font-medium rounded-full transition
              ${followed
                ? "bg-brown text-white border-brown hover:bg-opacity-80"
                : "border-brown text-brown hover:bg-brown hover:text-white"
              }`}
          >
            {followed ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 flex justify-around md:justify-start gap-10 mt-6 text-sm text-center">
        <div>
          <p className="text-lg font-bold text-black">1.2M</p>
          <p className="text-gray-500">Followers</p>
        </div>
        <div>
          <p className="text-lg font-bold text-black">300</p>
          <p className="text-gray-500">Following</p>
        </div>
        <div>
          <p className="text-lg font-bold text-black">12.8M</p>
          <p className="text-gray-500">Likes</p>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-4 px-4 text-left">
        <p className="text-gray-700">
          🖤 Storyteller & Vibes Curator. DM for collab 💌
        </p>
      </div>
    </div>
  );
}
