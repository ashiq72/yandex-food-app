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
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Typography,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BsPlus } from "react-icons/bs";
import Link from "next/link";

function Header() {
  const [clicked, setClicked] = useState(false);
  const locationMenuHandle = () => {
    setClicked(!clicked);
  };

  const { loading, cartItems } = useSelector((state) => state.cart);

  const sumOfOriginalPrice = cartItems.reduce(
    (total, product) => total + product.price,
    0
  );
  const totalPrice = sumOfOriginalPrice + 149;
  return (
    <div className="px-6 hidden sm:block">
      <div className="border-b border-gray-300 flex justify-between py-4">
        {/* first part  */}
        <div className="flex items-center gap-4  border-gray-300 ">
          <Link href="/">
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
          </Link>

          {/* Location  */}
          <div onMouseDown={locationMenuHandle}>
            <Menu
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <MenuHandler>
                <div className="border-2 border-gray-300 rounded-2xl px-4 py-2 hover:bg-slate-200 duration-300">
                  <button className="flex items-center relative">
                    <span className="text-3xl">
                      <CgPinAlt />
                    </span>
                    <span className="font-semibold text-gray-800">
                      {`Al-Farabi Avenue 156`}
                    </span>
                    <div className="text-base pl-2">
                      {clicked ? (
                        <div className="duration-600">
                          <IoIosArrowUp />
                        </div>
                      ) : (
                        <div className="duration-600">
                          <IoIosArrowDown />
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              </MenuHandler>
              <MenuList className="p-0 rounded-3xl w-[268px]">
                <MenuItem className="py-4 hover:bg-[#f5f4f2] px-6 flex items-center gap-4">
                  <h1 className="font-semibold text-gray-800 text-[15px]">
                    Add new address
                  </h1>
                  <span className="text-2xl font-extrabold text-gray-800">
                    <IoMdAdd />
                  </span>
                </MenuItem>
                <MenuItem className="py-4 hover:bg-[#f5f4f2]  px-6 gap-4 flex items-center justify-between">
                  <p className="text-[15px]">Al-Farabi Avenue, 156</p>

                  <span className="text-base text-gray-500">
                    <GiCheckMark />
                  </span>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          {/* <div
            onClick={locationMenuHandle}
            className="border-2 border-gray-300 rounded-2xl px-4 py-2 hover:bg-slate-200 duration-300"
          >
            <button className="flex items-center relative">
              <span className="text-3xl">
                <CgPinAlt />
              </span>
              <span className="font-semibold text-gray-800">
                {`Al-Farabi Avenue 156`}
              </span>
              <div className="text-base pl-2">
                {clicked ? (
                  <div className="duration-600">
                    <IoIosArrowUp />
                  </div>
                ) : (
                  <div className="duration-600">
                    <IoIosArrowDown />
                  </div>
                )}
              </div>
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
          </div> */}
        </div>
        {/* Secend part  */}
        <div className="flex items-center gap-6 pr-3">
          {/* Language  */}
          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <MenuHandler>
              <div className="flex flex-col items-center">
                <span className="text-2xl">
                  <RiGlobalLine />
                </span>
                <span className="text-sm text-gray-700">English</span>
              </div>
            </MenuHandler>
            <MenuList className="rounded-3xl shadow-2xl w-[200px]">
              <MenuItem className="pb-4 border-b-2 text-[16px] text-gray-800 hover:text-gray-700 hover:bg-red-400">
                Русский
              </MenuItem>
              <MenuItem className="py-4 border-b-2 text-[16px] text-gray-800 hover:text-gray-700 hover:bg-red-400 flex justify-between">
                <span>English</span>
                <span>
                  <FaCheck />
                </span>
              </MenuItem>
              <MenuItem className="py-4 border-b-2 text-[16px] text-gray-800 hover:text-gray-700 hover:bg-red-400">
                Հայերեն
              </MenuItem>
              <MenuItem className="py-4 border-b-2 text-[16px] text-gray-800 hover:text-gray-700 hover:bg-red-400">
                Français
              </MenuItem>
              <MenuItem className="py-4 border-b-2 text-[16px] text-gray-800 hover:text-gray-700 hover:bg-red-400">{`o'zbek`}</MenuItem>
              <MenuItem className="py-4 border-b-2 text-[16px] text-gray-800 hover:text-gray-700 hover:bg-red-400">
                Қазақ
              </MenuItem>
              <MenuItem className="py-4 text-[16px] text-gray-800 hover:text-gray-700 hover:bg-red-400">
                ky
              </MenuItem>
            </MenuList>
          </Menu>
          {/* Order and Avator */}
          <div className="flex items-center gap-4">
            {cartItems.length ? (
              <div className="flex items-center bg-yellow-300 w-fit py-3 px-4 rounded-2xl gap-1">
                <span className="text-2xl">
                  <IoIosBasket />
                </span>
                <span className="text-gray-900 font-semibold">
                  {totalPrice}₸
                </span>
              </div>
            ) : null}
            {/* <div>
              <Image
                src="https://i.postimg.cc/W1dv6wKb/avator.png"
                alt=""
                width={37}
                height={37}
              />
            </div> */}
            <Popover placement="bottom-end">
              <PopoverHandler>
                <Image
                  src="https://i.postimg.cc/W1dv6wKb/avator.png"
                  alt=""
                  width={37}
                  height={37}
                />
              </PopoverHandler>
              <PopoverContent className="w-[400px] -mt-[50px] ml-6 shadow-2xl rounded-3xl">
                <div className="flex items-center justify-between gap-4  px-4">
                  <div>
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="text-2xl"
                    >
                      Ashik Ahmed
                    </Typography>
                  </div>
                  <Image
                    src="https://i.postimg.cc/W1dv6wKb/avator.png"
                    alt=""
                    width={37}
                    height={37}
                  />
                </div>
                <List className="flex flex-col gap-[14px] mt-2">
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500 rounded-3xl"
                  >
                    <ListItem className="rounded-xl py-3">
                      <div className="flex justify-between">
                        <div>
                          <h1 className="text-black">Join Plus</h1>
                          <p className="font-light text-sm text-gray-500">
                            Get up to 5% back in Plus points when you order from
                            specially marked restaurants.
                          </p>
                        </div>
                        <div className="flex items-center justify-center px-1 py-[2px] bg-gradient-to-r from-cyan-500 to-pink-500 h-fit rounded-full text-white font-bold">
                          <span className="font-bold bg-gray-200 text-black rounded-full h-fit mr-1">
                            <BsPlus />
                          </span>
                          <span>5%</span>
                        </div>
                      </div>
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-800 rounded-3xl"
                  >
                    <ListItem className="rounded-xl py-3">
                      My information
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-800 rounded-3xl"
                  >
                    <ListItem className="rounded-xl py-3">My address</ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-800 rounded-3xl"
                  >
                    <ListItem className="rounded-xl py-3">My orders</ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-800 rounded-3xl"
                  >
                    <ListItem className="rounded-xl py-3">
                      Notifications
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-800 rounded-3xl"
                  >
                    <ListItem className="rounded-xl py-3">Log out</ListItem>
                  </a>
                </List>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
