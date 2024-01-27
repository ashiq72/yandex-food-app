import {
  addToCart,
  handleDecrement,
  handleIncrement,
} from "@/store/features/cartSlice/cartSlice";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

function ProductCard({ product }) {
  const { cartItems } = useSelector((state) => state.cart);

  const cartSelected = cartItems.find((item) => item.id === product.id);
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    let newQty = qty;
    dispatch(addToCart({ ...product, qty: newQty }));
  };
  const existItem = cartItems.find((x) => x.id === product.id);

  return (
    <div
      className={`sm:bg-white bg-neutral-100 sm:px-3 sm:pb-3 pb-0 pt-0 sm:w-[220px] w-auto sm:h-[360px] sm:rounded-xl rounded-3xl flex flex-col justify-between sm:border-none  ${
        product.status === "in-stock" ? "" : "opacity-[0.6]"
      }`}
    >
      <div className="h-auto ">
        <Image
          src={product.photoUrl}
          alt=""
          width={200}
          height={200}
          className="sm:rounded-xl rounded-3xl p-[6px]"
        />
      </div>
      <div className="flex flex-col justify-between sm:h-40 px-1 sm:px-0">
        <div className="px-2 sm:px-0">
          <h1 className="font-semibold sm:text-2xl text-lg">
            {product.price}₸
          </h1>
          <h2 className="sm:text-base text-xs">{product.name}</h2>
        </div>
        {cartSelected ? (
          <div className="sm:bg-[#f5f4f2] bg-white sm:h-fit flex items-center justify-between sm:px-4 px-3 sm:py-2 h-7 rounded-3xl mt-4 sm:mt-0 mb-2">
            <button
              onClick={() => dispatch(handleDecrement(product.id))}
              className="text-xl"
            >
              -
            </button>
            <button>{existItem.qty}</button>
            <button
              onClick={() => dispatch(handleIncrement(product.id))}
              className="text-xl"
            >
              +
            </button>
          </div>
        ) : (
          <div onClick={addToCartHandler}>
            {product.status === "in-stock" ? (
              <button className="sm:bg-[#f5f4f2] bg-white sm:h-fit flex items-center justify-center sm:gap-2  sm:px-4 px-3 sm:py-2 h-7 rounded-3xl mt-4 sm:mt-0 mb-2 w-full">
                <span className="">
                  <IoMdAdd />
                </span>
                <span className="text-lg text-gray-600 hidden sm:block">
                  Add
                </span>
              </button>
            ) : (
              <button
                disabled
                className="flex items-center sm:bg-[#f5f4f2] bg-white w-full rounded-xl justify-center py-2 gap-2 sm:mb-0 mb-2"
              >
                <span className="sm:text-lg text-sm text-gray-600 ">
                  Available soon
                </span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
