import Link from "next/link";
import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";

function HomeSidebar() {
  const itemsCategory = [
    { id: 1, name: "What's new" },
    { id: 2, name: "Новинки" },
    { id: 3, name: "Боксы" },
    { id: 4, name: "Комбо Баскеты" },
    { id: 5, name: "Сочная курочка" },
    { id: 6, name: "Снэки" },
    { id: 7, name: "Комбо" },
    { id: 8, name: "Напитки" },
    { id: 9, name: "Дополнительно" },
  ];
  return (
    <div>
      <div className="bg-white rounded-xl">
        <Link href="/" className="flex items-center px-8 py-3 gap-2">
          <span className="text-xl font-bold">
            <HiOutlineArrowLeft />
          </span>
          <span className="font-semibold">All restaurants</span>
        </Link>
      </div>
      {/* Menu  */}
      <div className="mt-8">
        <div className="px-8 py-2 font-semibold text-xl">Menu</div>
        {itemsCategory.map((item) => (
          <div key={item.id} className="hover:bg-white rounded-2xl py-4">
            <Link href="/" className="px-8  font-semibold ">
              {item.name}
            </Link>
          </div>
        ))}
        {/* <div className="bg-white rounded-2xl py-3">
          <Link href="/" className="px-8  font-semibold ">
            {`What's new`}
          </Link>
        </div>
        <div className="hover:bg-gray-50 rounded-2xl py-3">
          <Link href="/" className="px-8 py-2 font-semibold">
            Новинки
          </Link>
        </div>
        <div className="hover:bg-gray-50 rounded-2xl py-3">
          <Link href="/" className=" px-8 py-2 font-semibold">
            Боксы
          </Link>
        </div>
        <div className="hover:bg-gray-50 rounded-2xl py-3">
          <Link href="/" className=" px-8 py-2 font-semibold">
            Комбо Баскеты
          </Link>
        </div>
        <div className="hover:bg-gray-50 rounded-2xl py-3">
          <Link href="/" className=" px-8 py-2 font-semibold">
            Напитки
          </Link>
        </div>
        <div className="hover:bg-gray-50 rounded-2xl py-3">
          <Link href="/" className=" px-8 py-2 font-semibold">
            Сочная курочка
          </Link>
        </div>
        <div className="hover:bg-gray-50 rounded-2xl py-3">
          <Link href="/" className=" px-8 py-2 font-semibold">
            Снэки
          </Link>
        </div>
        <div className="hover:bg-gray-50 rounded-2xl py-3">
          <Link href="/" className=" px-8 py-2 font-semibold">
            Комбо
          </Link>
        </div>
        <div className="hover:bg-gray-50 rounded-2xl py-3">
          <Link href="/" className=" px-8 py-2 font-semibold">
            Напитки
          </Link>
        </div>
        <div className="hover:bg-gray-50 rounded-2xl py-3">
          <Link href="/" className=" px-8 py-2 font-semibold">
            Дополнительно
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default HomeSidebar;
