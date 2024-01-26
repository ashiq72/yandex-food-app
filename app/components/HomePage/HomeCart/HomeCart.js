import Image from "next/image";
import Link from "next/link";
import { FaCar } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function HomeCart() {
  const { loading, cartItems } = useSelector((state) => state.cart);
  return (
    <div className="bg-white w-[490px] h-[800px] rounded-2xl hidden xl:block relative">
      <div>
        <div className="p-6 w-full flex items-center justify-between">
          <h1 className="text-2xl font-semibold font-sans">Cart </h1>
          {cartItems.length && (
            <h1 className="text-base text-gray-500 font-sans">Clear </h1>
          )}
        </div>
      </div>

      {/*If there have cart item */}

      {cartItems.length === 0 ? (
        <div className="h-[600px] flex flex-col items-center justify-center">
          <Image
            src="https://i.postimg.cc/XJnwMSR3/svg.png"
            alt=""
            height={105}
            width={105}
          />
          <h1 className="font-bold text-2xl text-center pt-6">
            Your cart is currently empty
          </h1>
        </div>
      ) : (
        <>
          {/* CART CONTENT START */}
          <div>
            {/* CART ITEMS START */}
            <div className="flex flex-col gap-y-4 px-3 border-b pb-5">
              {cartItems.map((item, index) => (
                <CartItem
                  key={item._id}
                  product={item}
                  index={index}
                  cartItems={cartItems}
                />
              ))}
            </div>
            <div className="flex items-center justify-between px-3 py-3">
              <h1>Service free</h1>
              <h1 className="font-semibold">149₸</h1>
            </div>
          </div>
        </>
      )}

      {/* Bottom section of cart  */}
      <div className=" absolute bottom-4 px-3">
        <div className="border-t flex items-center gap-2 pt-5 ">
          <div className="bg-gray-100 rounded-xl p-4">
            <FaCar />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-normal text-green-500 leading-[14px]">
              Бесплатная доставка от 1000 ₸ · 45–55 мин
            </span>
            <span className="text-[13px] text-gray-400">Подробные условия</span>
          </div>
          <div className="p-0">
            <span className="">
              <GoInfo />
            </span>
          </div>
        </div>
        <div className="border-t flex items-center justify-between gap-2 py-3 px-3 rounded-2xl bg-[#FCE000] mt-4">
          <h1 className="font-semibold">Yes, go to checkout</h1>
          <h1 className="font-semibold text-2xl">149₸</h1>
        </div>
      </div>
    </div>
  );
}

export default HomeCart;
