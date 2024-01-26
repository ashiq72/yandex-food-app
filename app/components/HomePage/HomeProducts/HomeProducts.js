"use client";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { RiStarFill } from "react-icons/ri";
import Image from "next/image";
import product from "../../../../productData.json";
import ProductCard from "../../ProductCard/ProductCard";
import { GiPikeman } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";

function HomeProducts() {
  return (
    <div>
      {/* Image Banner */}
      <div className="relative h-96 lg:rounded-[40px] overflow-hidden">
        <div
          className="h-full lg:rounded-3xl lg:z-10"
          style={{
            backgroundImage: `url('https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* content goes here */}
        </div>
        <div
          className="absolute top-0 left-0 h-full w-full hidden lg:block"
          style={{
            background:
              "linear-gradient(to left, transparent, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 h-full w-full "
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))",
          }}
        ></div>
        <div className="absolute top-6 right-6 bg-gray-50 p-3 rounded-xl">
          <span className="text-2xl">
            <FaRegHeart />
          </span>
        </div>
        <div className="absolute top-52 lg:left-12 left-4 h-full w-full flex flex-col lg:gap-4 gap-2">
          <h1 className="text-white font-extrabold lg:text-5xl text-4xl">
            KFC
          </h1>
          <div className="flex gap-2">
            <div className="flex items-center bg-gray-200 rounded-xl lg:px-4 px-2 justify-center lg:gap-3 gap-1 lg:py-2">
              <span className="text-3xl">
                <GiPikeman />
              </span>
              <div className="">
                <h2 className="font-semibold lg:text-xl text-sm">17:30</h2>
                <h2 className="lg:-mt-2 -mt-1 font-light lg:text-base text-xs">
                  Today
                </h2>
              </div>
            </div>
            <div className="flex items-center bg-gray-200 rounded-xl lg:px-4 px-2 justify-center gap-3 lg:py-2">
              <span className="lg:text-2xl text-xl">
                <RiStarFill />
              </span>
              <div className="">
                <h2 className="font-semibold lg:text-xl text-sm">4.6</h2>
                <h2 className="lg:-mt-2 -mt-1 font-light lg:text-base text-xs">
                  200+
                </h2>
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl px-4 py-2 hidden lg:block">
              <span className="text-3xl ">
                <GoInfo />
              </span>
            </div>
            <div className="bg-gray-200 rounded-xl px-4 py-3 lg:hidden flex items-center justify-center text-center">
              <span className="text-xl">
                <BsThreeDots />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:static absolute bg-white lg:bg-transparent lg:rounded-none rounded-3xl -mt-5 z-40 ">
        {/* Information of Delivery */}
        <div className="py-10 px-4 lg:px-0">
          <div className="flex bg-[#E4F2DC] rounded-2xl items-center py-1 lg:py-0 px-1">
            <span>
              <Image
                src="https://i.postimg.cc/0QSJY00T/gift.png"
                alt=""
                width={100}
                height={100}
                className="lg:w-[70px] w-[40px]"
              />
            </span>
            <p className="text-green-600 lg:text-base text-xs">{`Free delivery – off any order`}</p>
          </div>
          <div></div>
        </div>
        {/* All category by products  */}
        <div className="px-3 lg:px-0">
          <div>
            {product.data.map((item, i) => (
              <div key={i}>
                <div id={item.id}>
                  <h1 className="font-bold text-3xl">{item.category}</h1>
                </div>
                <div className="lg:flex gap-2 pt-6 pb-10 flex-wrap grid grid-cols-2">
                  {item.category_item.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
