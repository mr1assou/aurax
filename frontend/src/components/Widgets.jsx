import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function Widgets() {
  return (
    <div className="hidden p-3  lg:flex flex-col space-y-4 w-[400px] ">
      <div className="bg-[#EFF3F4] text-[#88959D ] flex items-center h-[44px] space-x-3 rounded-full pl-5 ">
        <MagnifyingGlassIcon className=" w-[20px] h-[20px]" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          className="bg-transparent outline-none"
          style={{ backgroundColor: "transparent" }}
        />
      </div>
      <div className="bg-[#EFF3F4] rounded-xl p-3">
        <h1 className="text-xl font-bold mb-2 ">What's Happening?</h1>
        <div className="flex flex-col  py-3 space-y-0.5">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Agadir</span>
            <EllipsisHorizontalIcon className="w-[20px] h-[20px] ml-auto text-[#88959D ]" />
          </div>
          <span className="font-bold text-md">#CandelEvent </span>
          <span className="text-[#536471] text-xs">240k Aura</span>
        </div>
        <div className="flex flex-col  py-3">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Agadir</span>
            <EllipsisHorizontalIcon className="w-[20px] h-[20px] ml-auto text-[#88959D ]" />
          </div>
          <span className="font-bold text-sm">#CandelEvent </span>
          <span className="text-[#536471] text-xs">240k Aura</span>
        </div>
        <div className="flex flex-col  py-3">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Agadir</span>
            <EllipsisHorizontalIcon className="w-[20px] h-[20px] ml-auto text-[#88959D ]" />
          </div>
          <span className="font-bold text-md">#CandelEvent </span>
          <span className="text-[#536471] text-xs">240k Aura</span>
        </div>
        <div className="flex flex-col  py-3">
          <div className="flex justify-between text-[#536471] text-[13px]">
            <span>Trending in Agadir</span>
            <EllipsisHorizontalIcon className="w-[20px] h-[20px] ml-auto text-[#88959D ]" />
          </div>
          <span className="font-bold text-md">#CandelEvent </span>
          <span className="text-[#536471] text-xs">240k Aura</span>
        </div>
      </div>
      <div className="bg-[#EFF3F4] rounded-xl p-3">
        <h1 className="text-xl font-bold mb-2 ">Who to follow</h1>
        <div className="flex justify-between items-center py-3 ">
          <div className="flex items-center space-x-3  ">
            <img
              src="\assets\pdpguitarist.jpeg"
              alt="pdp"
              width={56}
              height={56}
              className="w-11 h-11 rounded-full"
            />
            <div className="flex flex-col text-sm ">
              <span className="font-bold">Morad Bs</span>
              <span>@Morad_</span>
            </div>
          </div>
          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm">
            Follow
          </button>
        </div>
        <div className="flex justify-between items-center py-3 ">
          <div className="flex items-center space-x-3  ">
            <img
              src="\assets\HatimPdp.jpg"
              alt="pdp"
              width={56}
              height={56}
              className="w-11 h-11 rounded-full"
            />
            <div className="flex flex-col text-sm ">
              <span className="font-bold">Epsi.exe</span>
              <span>@Hatim</span>
            </div>
          </div>
          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm">
            Follow
          </button>
        </div>
        <div className="flex justify-between items-center py-3 ">
          <div className="flex items-center space-x-3  ">
            <img
              src="\assets\HamzaPdp.png"
              alt="pdp"
              width={56}
              height={56}
              className="w-11 h-11 rounded-full"
            />
            <div className="flex flex-col text-sm ">
              <span className="font-bold">Hamza It</span>
              <span>@Hamza_Oz</span>
            </div>
          </div>
          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
