import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { BiSolidParty } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import axiosInstance from "../Axios";

function SideBar() {
  const [showNav, setShowNav] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [user,setUser]:any=useState([]);
      useEffect(() => {
            const fetchPosts = async () => {
                try {
                    const response = await axiosInstance.get('test');
                    setUser(response.data);
                } catch (error) {
                    console.error('Upload error:', error);
                }
            };
    
            fetchPosts();
        }, []);
  
          
  return (
    <nav
      className={`fixed bottom-0 left-0 w-full bg-white flex justify-center items-center h-14 z-50
        sm:top-0 sm:w-28 sm:h-screen sm:flex sm:flex-col sm:gap-4 sm:sticky sm:justify-normal xl:m-20
        xl:mr-10
        ${showNav ? "translate-y-0" : "translate-y-full"} 
        sm:translate-y-0`}
    >
      <div className="absolute h-full ">
        <div className="hidden sm:block sm:py-3 top-0 left-0 xl:relative xl:top-[-70px] xl:left-[45px]">
          <img src="/assets/ourlogo.png" width={50} height={50} alt="ourlogo" />
        </div>
        <ul className="flex m-0 p-0 gap-6 sm:flex-col sm:gap-4 ">
          <SideBarLink text="Home" Icon={FaHome} to="/home" />
          <SideBarLink text="Lives" Icon={MdOutlineOndemandVideo} to="/rooms" />
          <SideBarLink text="Marketplace" Icon={LuShoppingCart} to="/marketplace" />
          <SideBarLink text="Profile" Icon={CgProfile}  to={`/profile/${user.user_id}`} />
          <SideBarLink text="Events" Icon={BiSolidParty} to="/events" />
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;

interface SideBarLinkProps {
  text: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  to: string;
}

function SideBarLink({ text, Icon, to }: SideBarLinkProps) {
  return (
    <li className="flex items-center text-xl mb-2 space-x-3 p-2.5">
      <NavLink
        to={to}
        className={({ isActive }) => 
          `flex items-center space-x-3 ${
            isActive ? "text-brown" : "text-gray-500"
          } hover:text-brown/80 transition-colors`
        }
      >
        <Icon className="h-7" />
        <span className="hidden xl:block">{text}</span>
      </NavLink>
    </li>
  );
}