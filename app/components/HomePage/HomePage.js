"use client";
import HomeProducts from "./HomeProducts/HomeProducts";
import HomeSidebar from "./HomeSidebar/HomeSidebar";
import HomeCart from "./HomeCart/HomeCart";

function HomePage() {
  return (
    <div className="flex gap-8 sm:w-11/12 mx-auto sm:py-10">
      {/* 1. all menu section */}
      <div className="hidden sm:block w-[390px] sticky">
        <HomeSidebar />
      </div>

      {/* 2. all product section */}
      <div className="w-full ">
        <HomeProducts />
      </div>

      {/* 3. cart section */}
      <HomeCart />
    </div>
  );
}

export default HomePage;
