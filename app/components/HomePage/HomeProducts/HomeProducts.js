"use client";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { RiStarFill } from "react-icons/ri";
import Image from "next/image";
import product from "../../../../productData.json";
import ProductCard from "../../ProductCard/ProductCard";

function HomeProducts() {
  return (
    <div>
      {/* Image Banner */}
      <div className="relative h-96 rounded-[40px] overflow-hidden">
        <div
          className="h-full rounded-3xl z-10"
          style={{
            backgroundImage: `url('https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* content goes here */}
        </div>
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            background:
              "linear-gradient(to left, transparent, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))",
          }}
        ></div>
        <div className="absolute top-6 right-6 bg-gray-50 p-3 rounded-xl">
          <span className="text-2xl">
            <FaRegHeart />
          </span>
        </div>
        <div className="absolute top-52 left-12 h-full w-full flex flex-col gap-4">
          <h1 className="text-white font-extrabold text-5xl">KFC</h1>
          <div className="flex gap-2">
            <div className="flex items-center bg-gray-200 rounded-lg px-4 justify-center gap-3 py-1">
              <span className="text-2xl">
                <RiStarFill />
              </span>
              <div className="">
                <h2 className="font-semibold text-xl">4.6</h2>
                <h2 className="-mt-2 font-light">200+</h2>
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl px-4 py-1 flex items-center justify-center">
              <span className="text-3xl">
                <GoInfo />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Information of Delivery */}
      <div className="py-10">
        <div className="flex bg-[#E4F2DC] rounded-2xl items-center py-0 px-1">
          <span>
            <Image
              src="https://i.postimg.cc/0QSJY00T/gift.png"
              alt=""
              width={100}
              height={100}
              className="w-[70px]"
            />
          </span>
          <p className="text-green-600">{`Free delivery – off any order`}</p>
        </div>
        <div></div>
      </div>
      {/* All category by products  */}
      <div>
        <div>
          {product.data.map((item, i) => (
            <div key={i}>
              <div>
                <h1 className="font-bold text-3xl">{item.category}</h1>
              </div>
              <div className="flex gap-2 pt-6 pb-10">
                {item.category_item.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeProducts;
