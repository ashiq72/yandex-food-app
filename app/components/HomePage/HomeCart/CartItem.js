"use client";
import {
  handleDecrement,
  handleIncrement,
} from "@/store/features/cartSlice/cartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CartItem({ product, index }) {
  const { loading, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems);
  return (
    <div className="flex items-start gap-x-2">
      <div>
        <Image src={product.photoUrl} alt="" width={110} height={110} />
      </div>
      <div
        className={`flex items-center justify-between w-full gap-2
      ${index === cartItems.length - 1 ? "" : "border-b pb-1"}
       `}
      >
        <div className="w-1/2">
          <h3 className="text-sm ">{product.name}</h3>
          {product?.selectedSubCategories?.map((item, i) => (
            <p key={i} className="text-[10px] leading-3 text-gray-600">
              {item}
            </p>
          ))}
          <h3>{product.price} ₸</h3>
        </div>
        <div className="bg-neutral-100 w-1/2 h-fit flex items-center justify-between px-2 py-1 rounded-3xl">
          <button
            onClick={() => dispatch(handleDecrement(product.id))}
            className="text-xl"
          >
            -
          </button>
          <button>{product.qty}</button>
          <button
            onClick={() => dispatch(handleIncrement(product.id))}
            className="text-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
