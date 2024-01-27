import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoMail } from "react-icons/go";

function Footer() {
  return (
    <div className="bg-[#F9F9F9] ">
      <div className=" ">
        <div className="">
          <div className="w-8/12 mx-auto flex items-center justify-between border-t py-16 pt-24">
            <h2 className="font-semibold text-gray-800">
              <h2 className="font-semibold text-gray-900 text-xl ">
                Even easier in the app
              </h2>
              <div className="flex gap-4 pt-8">
                <Image
                  src="https://i.postimg.cc/cLhhVZmc/svg-2.png"
                  alt=""
                  width={130}
                  height={130}
                />
                <Image
                  src="https://i.postimg.cc/0NNnv3X1/svg-3.png"
                  alt=""
                  width={130}
                  height={130}
                />
              </div>
            </h2>
          </div>
        </div>
        <div className="border-t">
          <div className="w-8/12 mx-auto flex flex-col gap-8 border-t py-12">
            <h2 className="font-semibold text-gray-800">Company Information</h2>
            <div className="flex gap-4 flex-wrap">
              <Link href="" className="text-sm text-gray-600">
                User agreement
              </Link>
              <Link href="" className="text-sm text-gray-600">
                Contacts
              </Link>
              <Link href="" className="text-sm text-gray-600">
                Contacts
              </Link>
              <Link href="" className="text-sm text-gray-600">
                Contacts
              </Link>
              <Link href="" className="text-sm text-gray-600">
                Become a partner
              </Link>
              <Link href="" className="text-sm text-gray-600">
                Become a courier
              </Link>
              <Link href="" className="text-sm text-gray-600">
                Eats for Business
              </Link>
              <Link href="" className="text-sm text-gray-600">
                Plastic recycling
              </Link>
              <Link href="" className="text-sm text-gray-600">
                Order food in the Yandex Go app
              </Link>
              <Link
                href=""
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <GoMail />
                Feedback
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="w-8/12 mx-auto flex items-center justify-between border-t py-12">
            <p className="text-sm text-gray-600">© 2018–2024 Yandex Eats LLC</p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span> Project for Yandex</span>
              <Image
                src="https://i.postimg.cc/k4c4q12K/svg.png"
                alt=""
                width={25}
                height={25}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
