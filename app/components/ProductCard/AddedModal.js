"use client";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Radio,
} from "@material-tailwind/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  handleDecrement,
  handleIncrement,
} from "@/store/features/cartSlice/cartSlice";
import { IoIosBasket } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

export function AddedModal({ open, handleOpen, product, setOpen }) {
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [qtyBtnShow, setQtyBtnShow] = useState(false);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  // loaded all product from cookies
  const { cartItems } = useSelector((state) => state.cart);

  const disabledBtn =
    product?.subCategory?.length === selectedSubCategories.length;

  // Step 2: Create an onChange handler for the Radio component
  const handleSubCategoryChange = (index, selectedValue) => {
    const updatedSubCategories = [...selectedSubCategories];
    updatedSubCategories[index] = selectedValue;
    setSelectedSubCategories(updatedSubCategories);
  };

  // Product added to redux-toolkit
  const addToCartHandler = () => {
    let newQty = qty;
    dispatch(addToCart({ ...product, qty: newQty, selectedSubCategories }));
    setOpen(!open);
  };

  const existItem = cartItems.find((x) => x.id === product.id);

  // Quenty Button show
  const qtyBtnHandle = () => {
    setQtyBtnShow(!qtyBtnShow);
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size="lg"
        animate={{
          mount: { scale: 1, y: -1 },
          unmount: { scale: 1, y: -1 },
        }}
      >
        <DialogBody className="relative">
          <Button
            onClick={handleOpen}
            variant="text"
            className="rounded-full hover:bg-blue-gray-400 cursor-pointer absolute right-10 text-2xl"
          >
            <IoCloseOutline onClick={handleOpen} />
          </Button>
          <div className="flex h-[750px]">
            {/* Only image side by Product  */}
            <div className="w-[500px]">
              <div className="h-auto ">
                <Image
                  src={product.photoUrl}
                  alt=""
                  width={400}
                  height={400}
                  className="sm:rounded-xl rounded-3xl "
                />
              </div>
            </div>
            {/* Only other information side by Product  */}
            <div className="w-[730px] relative overflow-y-scroll overflow-x-hidden pt-4">
              {/* Name, Price, Button  */}
              <div>
                <h1 className="font-extrabold text-black text-[26px]">
                  {product.name}
                </h1>
                <div className="flex gap-6 py-4 items-center">
                  <h2 className="font-semibold text-xl">
                    <span>{product.price}</span>
                    <span className="text-lg font-normal">₸</span>
                  </h2>
                  {qtyBtnShow ? (
                    <div className="flex  items-center gap-4">
                      <div className="sm:bg-[#f5f4f2] w-28 bg-white sm:h-fit flex items-center justify-between sm:px-4 px-3 sm:py-2 h-7 rounded-3xl mt-4 sm:mt-0 ">
                        <button
                          onClick={() => dispatch(handleDecrement(product.id))}
                          className="text-xl"
                        >
                          -
                        </button>
                        <button>{existItem?.qty}0</button>
                        <button
                          onClick={() => dispatch(handleIncrement(product.id))}
                          className="text-xl"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={addToCartHandler}
                        className="flex items-center bg-[#FCE000] py-2 px-4 rounded-lg gap-2"
                      >
                        <span className="font-bold text-black text-xl">
                          <IoIosBasket />
                        </span>
                        <span className="font-medium text-black text-lg">
                          Order
                        </span>
                      </button>
                    </div>
                  ) : (
                    <button
                      disabled={!disabledBtn}
                      onClick={qtyBtnHandle}
                      className={`${
                        disabledBtn
                          ? "bg-[#FCE000] py-2 px-4 rounded-lg"
                          : "bg-[#FCE000] py-2 px-4 rounded-lg opacity-50"
                      }`}
                    >
                      Добавить
                    </button>
                  )}
                </div>
              </div>
              {/* Sub Category  */}
              <div>
                {product?.subCategory?.map((item, i) => (
                  <div key={i}>
                    <div className="border-y py-5">
                      <h1 className="font-bold text-gray-900 text-xl">
                        {item.sub_category_name}
                      </h1>
                      {item.sub_category_item.map((cate, j) => (
                        <div key={j} className="py-2">
                          <label
                            htmlFor={cate}
                            className="text-gray-900 flex justify-between w-full group-hover:bg-gray-800 rounded-full"
                          >
                            {cate}
                            <Radio
                              id={cate}
                              name={`subCategory_${i}`}
                              ripple={false}
                              color="amber"
                              className="hover:bg-none"
                              onChange={(selectedValue) =>
                                handleSubCategoryChange(i, cate)
                              }
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-8">
            <p>Description</p>
            <h2 className="text-gray-900">{product.description}</h2>
          </div>
          {/* Model for product added  */}
        </DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
    </>
  );
}
