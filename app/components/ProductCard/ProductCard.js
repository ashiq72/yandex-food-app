import Image from "next/image";
import React from "react";
import { IoMdAdd } from "react-icons/io";

function ProductCard({ product }) {
  console.log(product);
  return (
    <div className="bg-white p-3 w-[220px] h-[360px] rounded-xl ">
      <Image src={product.photoUrl} alt="" width={200} height={200} />
      <div className="flex flex-col justify-between h-36">
        <div>
          <h1 className="font-semibold text-2xl">{product.price}₸</h1>
          <h2>{product.name}</h2>
        </div>
        <div>
          <button className="flex items-center bg-gray-100 w-full rounded-xl justify-center py-2 gap-2 ">
            <span>
              <IoMdAdd />
            </span>
            <span className="text-lg text-gray-600">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
