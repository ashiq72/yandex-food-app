"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

function CartItem({ product, index }) {
  const { loading, cartItems } = useSelector((state) => state.cart);

  return (
    <div className="flex items-center gap-x-2">
      <div>
        <Image src={product.photoUrl} alt="" width={110} height={110} />
      </div>
      <div
        className={`flex justify-between w-full gap-2
      ${index === cartItems.length - 1 ? "" : "border-b pb-1"}
       `}
      >
        <duv className="w-1/2">
          <h3 className="text-sm ">{product.name}</h3>
          <h3>{product.price} ₸</h3>
        </duv>
        <duv className="bg-neutral-100 w-1/2 h-fit flex items-center justify-between px-2 py-1 rounded-3xl">
          <button className="text-xl">-</button>
          <button>1</button>
          <button className="text-xl">+</button>
        </duv>
      </div>
    </div>
  );
}

export default CartItem;
