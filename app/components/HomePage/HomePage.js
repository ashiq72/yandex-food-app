import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { RiStarFill } from "react-icons/ri";
import { GoInfo } from "react-icons/go";

function HomePage() {
  return (
    <div className="flex gap-8 w-11/12 mx-auto py-10">
      {/* 1. all menu section */}
      <div className=" w-[19%] ">
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
          <div className="bg-white rounded-2xl py-3">
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
              Комбо Баскеты
            </Link>
          </div>
          <div className="hover:bg-gray-50 rounded-2xl py-3">
            <Link href="/" className=" px-8 py-2 font-semibold">
              Снэки
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
          </div>
        </div>
      </div>

      {/* 2. all product section */}
      <div className=" w-full">
        <div className="relative h-96 rounded-3xl overflow-hidden">
          <div
            className="h-full rounded-3xl z-10"
            style={{
              backgroundImage: `url('https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* content goes here */}
          </div>
          <div
            className="absolute top-0 left-0 h-full w-full"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))",
            }}
          ></div>
          <div className="absolute top-52 left-12 h-full w-full flex flex-col gap-4">
            <h1 className="text-white font-extrabold text-5xl">KFC</h1>
            <div className="flex gap-2">
              <div className="flex items-center bg-gray-200 rounded-lg px-4 justify-center gap-3 py-1">
                <span className="text-2xl">
                  <RiStarFill />
                </span>
                <div className="">
                  <h2 className="font-semibold text-xl">4.6</h2>
                  <h2 className="-mt-2 font-light">200+</h2>
                </div>
              </div>
              <div className="bg-gray-200 rounded-xl px-4 py-1 flex items-center justify-center">
                <span className="text-3xl">
                  <GoInfo />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3. cart section */}
      <div className="bg-white w-[27%] h-[800px] rounded-2xl p-6">
        <h1 className="text-2xl font-semibold font-sans">Cart </h1>
      </div>
    </div>
  );
}

export default HomePage;
