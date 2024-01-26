"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CgPinAlt } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { IoIosBasket } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";

function Header() {
  const [clicked, setClicked] = useState(false);
  const locationMenuHandle = () => {
    setClicked(!clicked);
  };
  return (
    <div className="px-6">
      <div className="border-b border-gray-300 flex justify-between py-4">
        {/* first part  */}
        <div className="flex items-center gap-4  border-gray-300 ">
          <div>
            {/* large screen logo  */}
            <Image
              src="https://i.postimg.cc/SQ9qMRcw/large-logo.png"
              alt="large_logo"
              height={200}
              width={200}
              className="hidden xl:flex w-auto h-auto"
              priority
            />
            {/* small screen logo  */}
            <Image
              src="https://i.postimg.cc/5NMJqJ3j/small-logo.png"
              alt="large_logo"
              height={200}
              width={200}
              className="xl:hidden flex w-auto h-auto"
              priority
            />
          </div>
          <div
            onClick={locationMenuHandle}
            className="border-2 border-gray-300 rounded-2xl px-4 py-2 hover:bg-slate-200 duration-300"
          >
            <button className="flex items-center relative">
              <span className="text-3xl">
                <CgPinAlt />
              </span>
              <span className="font-semibold text-gray-800">
                {" "}
                {`Al-Farabi Avenue 156`}
              </span>
              <span className="text-base pl-2">
                {clicked ? (
                  <div className="duration-600">
                    <IoIosArrowUp />
                  </div>
                ) : (
                  <div className="duration-600">
                    <IoIosArrowDown />
                  </div>
                )}
              </span>
            </button>
            {clicked && (
              <div className="absolute bg-white mt-5 rounded-2xl z-40">
                <div className="py-4 hover:bg-slate-200 hover:rounded-t-2xl px-6 flex items-center justify-between gap-4">
                  <h1 className="font-semibold">Add new address</h1>
                  <span className="text-2xl">
                    <IoMdAdd />
                  </span>
                </div>
                <div className="py-4 hover:bg-slate-200 hover:rounded-b-2xl  px-6 gap-4 flex items-center justify-between">
                  <p className="">Al-Farabi Avenue, 156</p>

                  <span className="text-lg text-gray-500">
                    <GiCheckMark />
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Secend part  */}
        <div className="flex items-center gap-6 pr-3">
          {/* Language  */}
          <div className="flex flex-col items-center">
            <span className="text-2xl">
              <RiGlobalLine />
            </span>
            <span className="text-sm text-gray-700">English</span>
          </div>
          {/* Order and Avator */}
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-yellow-300 w-fit py-3 px-4 rounded-2xl gap-1">
              <span className="text-2xl">
                <IoIosBasket />
              </span>
              <span className="text-gray-900 font-semibold">2180₸</span>
            </div>
            <div>
              <Image
                src="https://i.postimg.cc/W1dv6wKb/avator.png"
                alt=""
                width={37}
                height={37}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
