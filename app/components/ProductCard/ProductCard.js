import {
  addToCart,
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
      className={`bg-white px-3 pb-3 pt-0 w-[220px] h-[360px] rounded-xl flex flex-col justify-between  ${
        product.status === "in-stock" ? "" : "opacity-[0.6]"
      }`}
    >
      <div className="h-auto">
        <Image src={product.photoUrl} alt="" width={200} height={200} />
      </div>
      <div className="flex flex-col justify-between h-40">
        <div>
          <h1 className="font-semibold text-2xl">{product.price}₸</h1>
          <h2>{product.name}</h2>
        </div>
        {cartSelected ? (
          <duv className="bg-neutral-100 h-fit flex items-center justify-between px-4 py-2 rounded-3xl">
            <button className="text-xl">-</button>
            <button>{existItem.qty}</button>
            <button
              onClick={() => dispatch(handleIncrement(product.id))}
              className="text-xl"
            >
              +
            </button>
          </duv>
        ) : (
          <div onClick={addToCartHandler}>
            {product.status === "in-stock" ? (
              <button className="flex items-center bg-gray-100 w-full rounded-xl justify-center py-2 gap-2 ">
                <span>
                  <IoMdAdd />
                </span>
                <span className="text-lg text-gray-600">Add</span>
              </button>
            ) : (
              <button
                disabled
                className="flex items-center bg-gray-100 w-full rounded-xl justify-center py-2 gap-2 "
              >
                <span className="text-lg text-gray-400">Available soon</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
