/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-14 cursor-pointer my-auto">
        <Image
          src="/logobackground.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* mid */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          className="flex-grow pl-5 bg-transparent outline-none md:text-base text-xs text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Search your perfect vacation"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-[#e47831]  text-white rounded-full p-2 cursor-pointer md:mx-3" />
      </div>
      {/* right */}
      <div className="flex items-center space-x-3 justify-end text-gray-500 ">
        <p className="hidden md:inline cur ">Become a host</p>
        <GlobeAltIcon className="h-6 " />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;