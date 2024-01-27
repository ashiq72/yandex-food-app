"use client";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { RiStarFill } from "react-icons/ri";
import Image from "next/image";
import product from "../../../../productData.json";
import ProductCard from "../../ProductCard/ProductCard";
import { GiPikeman } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
import { FaCar, FaHeart } from "react-icons/fa6";
import { FcSportsMode } from "react-icons/fc";
import { MdKeyboardArrowRight } from "react-icons/md";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";

function HomeProducts() {
  const [clicked, setClicked] = useState(false);
  const heartHandle = () => {
    setClicked(!clicked);
  };

  //All product loaded form cookies
  const { loading, cartItems } = useSelector((state) => state.cart);

  // Calculation for total carts price
  const sumOfOriginalPrice = cartItems.reduce(
    (total, product) => total + product.price,
    0
  );
  const totalPrice = sumOfOriginalPrice + 149;

  return (
    <div className="">
      {/* Image Banner */}
      <div className="relative sm:h-96 h-72 sm:rounded-[40px] overflow-hidden">
        <div
          className="h-full sm:rounded-3xl sm:z-10"
          style={{
            backgroundImage: `url('https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* content goes here */}
        </div>
        <div
          className="absolute top-0 left-0 h-full w-full hidden sm:block"
          style={{
            background:
              "linear-gradient(to left, transparent, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 h-full w-full sm:hidden block"
          style={{
            background:
              "linear-gradient(to bottom , transparent, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9))",
          }}
        ></div>
        <div className="absolute top-6 left-4 flex gap-4 sm:hidden">
          <span className="text-2xl bg-gray-50 p-3 sm:rounded-xl rounded-full">
            <GoArrowLeft />
          </span>
        </div>
        <div className="absolute top-6 right-4  flex gap-2">
          <span
            onClick={heartHandle}
            className="text-2xl bg-gray-50 p-3 sm:rounded-xl rounded-full"
          >
            {clicked ? (
              <span className="text-[24px]">
                <FaHeart />
              </span>
            ) : (
              <FaRegHeart />
            )}
          </span>
          <span className="text-2xl bg-gray-50 p-3 sm:rounded-xl rounded-full sm:hidden">
            <FiSearch />
          </span>
        </div>
        <div className="absolute sm:top-52 top-28 sm:left-12 left-4 h-full w-full flex flex-col sm:gap-4 gap-4">
          <h1 className="text-white font-extrabold sm:text-5xl text-[32px]">
            KFC
          </h1>
          <div className="flex gap-2">
            <Popover
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              placement="top"
              className=""
            >
              <PopoverHandler>
                <div className="flex items-center bg-gray-200 hover:bg-gray-50 duration-300 rounded-xl sm:px-4 px-2 justify-center sm:gap-3 gap-1 sm:py-2 cursor-pointer">
                  <span className="text-3xl">
                    <GiPikeman />
                  </span>
                  <div className="">
                    <h2 className="font-semibold sm:text-xl text-sm">17:30</h2>
                    <h2 className="sm:-mt-2 -mt-1 font-light sm:text-base text-xs">
                      Today
                    </h2>
                  </div>
                </div>
              </PopoverHandler>
              <div className="shadow-2xl">
                <PopoverContent className="w-[425px] p-6 rounded-2xl z-50 lg:mt-0 mt-32">
                  <div className="pb-3">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="text-xl"
                    >
                      Time
                    </Typography>
                    <div className="pt-2">
                      <h2 className="font-semibold text-[16px]">
                        Алматы, улица Розыбакиева, 247А
                      </h2>
                      <p className="text-[16px] text-gray-500">
                        Business hours from 11:30
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </div>
            </Popover>
            <Popover
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              placement="top"
              className=""
            >
              <PopoverHandler>
                <div className="flex items-center bg-gray-200 hover:bg-gray-50 duration-300 rounded-xl sm:px-4 px-2 justify-center gap-3 sm:py-2 cursor-pointer">
                  <span className="sm:text-2xl text-xl">
                    <RiStarFill />
                  </span>
                  <div className="">
                    <h2 className="font-semibold sm:text-xl text-sm">4.6</h2>
                    <h2 className="sm:-mt-2 -mt-1 font-light sm:text-base text-xs">
                      200+
                    </h2>
                  </div>
                </div>
              </PopoverHandler>
              <div className="shadow-2xl">
                <PopoverContent className="w-[425px] p-6 rounded-2xl z-50 lg:mt-0 mt-32">
                  <div className="pb-3">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="text-xl"
                    >
                      KFC
                    </Typography>
                    <div className="pt-2">
                      <h2 className="font-semibold text-[16px]">
                        Алматы, улица Розыбакиева, 247А
                      </h2>
                      <p className="text-[16px] text-gray-500">
                        Business hours from 11:30
                      </p>
                    </div>
                  </div>
                  <div className="border-y-2 py-4">
                    <p className="text-[16px] text-gray-500">
                      Fast foodHalal₸₸
                    </p>
                  </div>
                  <div className="pt-4">
                    <p className="text-[16px] text-gray-500">
                      Contractor (seller) ТОО «The Caspian International
                      Restaurants Company (Каспиан Интернэшнл Рестронгз
                      Компани)», 010000, г.Алматы, ул. Абиша Кекилбайулы, 34, БЦ
                      Capital Tower (2 этаж), BIN 070440007370
                    </p>
                    <p className="text-[16px] pt-3 text-gray-500">
                      Business hours: from 10:00 to 23:30
                    </p>
                  </div>
                </PopoverContent>
              </div>
            </Popover>
            <Popover
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              placement="top"
              className=""
            >
              <PopoverHandler>
                <div className="bg-gray-200 hover:bg-gray-50 duration-300 cursor-pointer rounded-xl px-4 py-2 flex items-center justify-center">
                  <span className="text-3xl hidden sm:block">
                    <GoInfo />
                  </span>
                  <span className="text-xl sm:hidden flex">
                    <BsThreeDots />
                  </span>
                </div>
              </PopoverHandler>
              <div className="shadow-2xl">
                <PopoverContent className="w-[425px] p-6 rounded-2xl z-50 lg:mt-0 mt-32">
                  <div className="pb-3">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="text-xl"
                    >
                      KFC
                    </Typography>
                    <div className="pt-2">
                      <h2 className="font-semibold text-[16px]">
                        Алматы, улица Розыбакиева, 247А
                      </h2>
                      <p className="text-[16px] text-gray-500">
                        Business hours from 11:30
                      </p>
                    </div>
                  </div>
                  <div className="border-y-2 py-4">
                    <p className="text-[16px] text-gray-500">
                      Fast foodHalal₸₸
                    </p>
                  </div>
                  <div className="pt-4">
                    <p className="text-[16px] text-gray-500">
                      Contractor (seller) ТОО «The Caspian International
                      Restaurants Company (Каспиан Интернэшнл Рестронгз
                      Компани)», 010000, г.Алматы, ул. Абиша Кекилбайулы, 34, БЦ
                      Capital Tower (2 этаж), BIN 070440007370
                    </p>
                    <p className="text-[16px] pt-3 text-gray-500">
                      Business hours: from 10:00 to 23:30
                    </p>
                  </div>
                </PopoverContent>
              </div>
            </Popover>
          </div>
        </div>
      </div>

      <div className="sm:static absolute bg-white sm:bg-transparent sm:rounded-none rounded-3xl sm:-mt-0 -mt-14 z-40 ">
        {/* Information of Delivery */}
        <div className="py-10 px-4 sm:px-0">
          <div className="flex bg-[#E4F2DC] rounded-2xl items-center py-1 sm:py-0 px-1">
            <span>
              <Image
                src="https://i.postimg.cc/0QSJY00T/gift.png"
                alt=""
                width={100}
                height={100}
                className="sm:w-[70px] w-[40px]"
              />
            </span>
            <p className="text-green-600 sm:text-base text-xs">{`Free delivery – off any order`}</p>
          </div>
          <div></div>
        </div>
        {/* All category by products  */}
        <div className="px-3 sm:px-0">
          <div>
            {product.data.map((item, i) => (
              <div key={i}>
                <div id={item.id}>
                  <h1 className="font-bold text-3xl">{item.category}</h1>
                </div>
                <div className="sm:flex gap-2 pt-6 pb-10 flex-wrap grid grid-cols-2">
                  {item.category_item.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sm:hidden block fixed z-50 bottom-0 left-0 w-full mx-auto bg-white shadow-2xl px-4 rounded-3xl">
        <div className="border-t flex items-center justify-between gap-2 py-5">
          <div className=" text-[27px] flex flex-col items-center justify-center">
            <FcSportsMode />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-normal text-green-500 leading-[14px]">
              Бесплатная доставка от 1000 ₸ · 45–55 мин
            </span>
            <span className="text-[13px] text-center text-gray-400">
              Подробные условия
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl">
              <MdKeyboardArrowRight />
            </span>
          </div>
        </div>
        {cartItems.length ? (
          <div className="flex items-center justify-between gap-2 py-3 px-3 rounded-2xl bg-[#FCE000] mb-4">
            <h1 className=" font-semibold">12-20 min</h1>
            <h1 className=" font-semibold">Order</h1>
            <h1 className=" font-light text-lg">{totalPrice}₸</h1>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default HomeProducts;
