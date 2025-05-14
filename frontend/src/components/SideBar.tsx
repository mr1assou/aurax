import React from "react";

import {
  BellIcon,
  BookmarkIcon,
  EllipsisHorizontalCircleIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline"; // Import icons from Heroicons

function SideBar() {
  const [showNav, setShowNav] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      // Apply scroll behavior only on small screens
      if (window.scrollY > lastScrollY.current) {
        setShowNav(false); // scrolling down, hide nav
      } else {
        setShowNav(true); // scrolling up, show nav
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bottom-0 left-0 w-full bg-white  flex justify-center items-center h-14 z-50
        sm:top-0  sm:w-28 sm:h-screen sm:flex sm:flex-col sm:gap-4  sm:sticky  sm:justify-normal xl:m-20
        xl:mr-10
        ${showNav ? "translate-y-0" : "translate-y-full"} 
        sm:translate-y-0`}
    >
      <div className="absolute h-full ">
        <div className="hidden sm:block sm:py-3 top-0 left-0 xl:relative xl:top-[-70px] xl:left-[45px]">
          <img src="/assets/ourlogo.png" width={50} height={50} alt="ourlogo" />
        </div>
        <ul className="flex m-0 p-0 gap-6 sm:flex-col sm:gap-4 ">
          <SideBarLink text="Home" Icon={HomeIcon} />
          <SideBarLink text="Explore" Icon={HashtagIcon} />
          <SideBarLink text="Notifications" Icon={BellIcon} />
          <SideBarLink text="Messages" Icon={InboxIcon} />
          <SideBarLink text="BookMarks" Icon={BookmarkIcon} />
          <SideBarLink text="Profile" Icon={UserIcon} />
          <SideBarLink text="More" Icon={EllipsisHorizontalCircleIcon} />
          <button
            className="hidden xl:block bg-brown w-[200px] h-[52px]
          rounded-full text-white font-medium cursor-pointer shadow-sm mt-2"
          >
            AuraX
          </button>
        </ul>
        <div className="hidden sm:inline absolute bottom-0">user info</div>
      </div>
    </nav>
  );
}

export default SideBar;

interface SideBarLinkProps {
  text: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
}
function SideBarLink({ text, Icon }) {
  return (
    <li className="flex items-center text-xl mb-2 space-x-3 p-2.5">
      <Icon className="h-7" />
      <span className="hidden xl:block">{text} </span>
    </li>
  );
}
