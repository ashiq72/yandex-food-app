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
      className={`lg:bg-white bg-neutral-100 lg:px-3 pb-3 pt-0 lg:w-[220px] w-auto lg:h-[360px] lg:rounded-xl rounded-2xl flex flex-col justify-between lg:border-none  ${
        product.status === "in-stock" ? "" : "opacity-[0.6]"
      }`}
    >
      <div className="h-auto ">
        <Image
          src={product.photoUrl}
          alt=""
          width={200}
          height={200}
          className="lg:rounded-xl rounded-2xl p-2"
        />
      </div>
      <div className="flex flex-col justify-between lg:h-40 px-2 lg:px-0">
        <div>
          <h1 className="font-semibold lg:text-2xl text-lg">
            {product.price}₸
          </h1>
          <h2 className="lg:text-base text-xs">{product.name}</h2>
        </div>
        {cartSelected ? (
          <div className="lg:bg-neutral-100 bg-white lg:h-fit flex items-center justify-between lg:px-4 px-3 lg:py-2 h-9 rounded-3xl mt-4 lg:mt-0">
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
              <button className="flex items-center lg:bg-neutral-100 bg-white w-full rounded-xl justify-center h-9 lg:h-0 lg:py-2 gap-2 mt-4 lg:mt-0">
                <span className="">
                  <IoMdAdd />
                </span>
                <span className="text-lg text-gray-600 hidden lg:block">
                  Add
                </span>
              </button>
            ) : (
              <button
                disabled
                className="flex items-center lg:bg-neutral-100 bg-white w-full rounded-xl justify-center py-2 gap-2 "
              >
                <span className="lg:text-lg text-sm text-gray-600 ">
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
