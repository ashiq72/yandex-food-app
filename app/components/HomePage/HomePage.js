"use client";

import { GoInfo } from "react-icons/go";
import { FaCar } from "react-icons/fa";
import HomeProducts from "./HomeProducts/HomeProducts";
import HomeSidebar from "./HomeSidebar/HomeSidebar";
import { useEffect, useRef } from "react";

function HomePage() {
  return (
    <div className="flex gap-8 w-11/12 mx-auto py-10">
      {/* 1. all menu section */}
      <div className=" w-[390px] ">
        <HomeSidebar />
      </div>

      {/* 2. all product section */}
      <div className="w-full ">
        <HomeProducts />
      </div>

      {/* 3. cart section */}
      <div className="bg-white w-[490px] h-[800px] rounded-2xl hidden xl:flex relative">
        <div className="p-6">
          <h1 className="text-2xl font-semibold font-sans">Cart </h1>
        </div>
        {/* Bottom section of cart  */}
        <div className=" absolute bottom-4 px-3">
          <div className="border-t flex items-center gap-2 pt-5 ">
            <div className="bg-gray-100 rounded-xl p-4">
              <FaCar />
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-normal text-green-500 leading-[14px]">
                Бесплатная доставка от 1000 ₸ · 45–55 мин
              </span>
              <span className="text-[13px] text-gray-400">
                Подробные условия
              </span>
            </div>
            <div className="p-0">
              <span className="">
                <GoInfo />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
