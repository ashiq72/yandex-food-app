"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function HomeSidebar() {
  const itemsCategory = [
    // { id: 1, name: "What's new", link: "What's new" },
    { id: "1", name: "Новинки", link: "Новинки" },
    { id: "2", name: "Боксы", link: "Боксы" },
    { id: "3", name: "Комбо Баскеты", link: "Комбо" },
    { id: "4", name: "Сочная курочка", link: "Сочная" },
    { id: "5", name: "Снэки", link: "Снэки" },
    { id: "6", name: "Комбо", link: "Комбо" },
    { id: "7", name: "Напитки", link: "Напитки" },
    { id: "8", name: "Дополнительно", link: "Дополнительно" },
  ];

  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    // Set the first link as active initially
    if (itemsCategory.length > 0) {
      setActiveLink(itemsCategory[0].id);
    }
  }, []); // Run this effect only once on component mount

  const handleLinkClick = (itemId) => {
    setActiveLink(itemId);
  };
  return (
    <div>
      <div className="bg-white rounded-xl hidden sm:block">
        <Link href="/" className="flex items-center px-8 py-3 gap-2">
          <span className="text-xl font-bold">
            <HiOutlineArrowLeft />
          </span>
          <span className="font-semibold">All restaurants</span>
        </Link>
      </div>
      {/* Menu  */}
      <div className="mt-8 hidden sm:block">
        <div className="px-8 py-2 font-semibold text-xl hidden sm:block">
          Menu
        </div>
        {itemsCategory.map((item) => (
          <ScrollLink
            key={item.id}
            to={item.id}
            smooth={true}
            duration={700}
            className={`hover:bg-gray-50 rounded-2xl py-4 cursor-pointer flex flex-col  ${
              activeLink === item.id ? "bg-white" : ""
            }`}
            onClick={() => handleLinkClick(item.id)}
          >
            <span className="px-8 font-semibold">{item.name}</span>
          </ScrollLink>
        ))}
      </div>
    </div>
  );
}

export default HomeSidebar;
