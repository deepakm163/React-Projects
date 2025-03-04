import React from "react";
import Avatar from 'react-avatar';
import { TfiMenu } from "react-icons/tfi";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import profile from '../assets/profile.avif'

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 py-2">
      <div className="flex border items-center space-x-4 border-black">
        <TfiMenu className="text-xl cursor-pointer " />
        <img src={logo} alt="" className="w-15 cursor-pointer " />
      </div>
      <div className="flex w-[45%] items-center border border-black">
        <div className="w-[100%] px-3 py-2 border border-gray-400 rounded-l-full">
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
        <button className="px-4 py-2 border border-gray-400 bg-gray-200 rounded-r-full">
          <CiSearch size={"24px"} />
        </button>

        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-400 rounded-[50%] p-1 cusrsor-pointer  hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="border border-black">
      <RiVideoAddLine />
       <FaRegBell />
      
        </div>
    </div>
  );
};

export default Navbar;
