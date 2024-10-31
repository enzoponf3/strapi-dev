"use client";
import * as React from "react";
import Image from "next/image";
import CartIcon from "@/public/icons/cartIcon";
import Logo from "@/public/logo-black.png";
import UserIcon from "@/public/icons/userIcon";
import HamIcon from "@/public/icons/hamIcon";
import CloseIcon from "@/public/icons/closeIcon";
import { getCategories } from "@/lib/get-categories";

export const Header = (categories) => {
  const [aside, setAside] = React.useState<boolean>(false);
  console.log(categories);
  return (
    <div className="bg-brand w-full flex items-center justify-between px-6 pb-4 pt-2 relative">
      <div
        className={
          (aside ? "translate-x-full " : "-translate-x-full ") +
          "absolute bg-white top-0 h-[100dvh] -left-full w-full transition-transform transform duration-500 opacity-50"
        }
        onClick={() => setAside(!aside)}
      ></div>
      <aside
        className={
          (aside ? "translate-x-full   " : " -translate-x-full ") +
          "absolute top-0 bg-brand w-2/3 h-[100dvh] transform transition-transform -left-2/3 duration-500 z-20 delay-100 text-black flex flex-col px-8 text-xl"
        }
      >
        <a href="#" className="pt-36 underline font-semibold">
          Home
        </a>
        <div className="flex flex-col">
          <ul className="pt-16 uppercase font-light  text-sm">
            {categories.categories.map((category) => {
              return (
                <li className="py-1" key={category.name}>
                  {category.name}
                </li>
              );
            })}
          </ul>

          <a className="py-4 font-semibold" href="#">
            Cart
          </a>
          <a className="py-4 font-semibold" href="#">
            Login
          </a>
          <a className="py-4 font-semibold" href="#">
            Register
          </a>
        </div>

        <footer className="mt-auto">
          <div className="flex flex-col py-8 text-base">
            <span>Currency: EUR</span>
            <span>Español - English</span>
          </div>
        </footer>
      </aside>
      <div className="flex gap-4 items-center z-40">
        <button type="button" onClick={() => setAside(!aside)}>
          <span>{aside ? <CloseIcon /> : <HamIcon />}</span>
        </button>
        <a href="#">
          <Image
            className="pt-3"
            src={Logo}
            width={48}
            height={48}
            alt="brand logo"
          />
        </a>
      </div>
      <div className="flex gap-8 items-center text-black text-center">
        <div className="flex gap-2 items-center">
          <span>
            <UserIcon width={18} height={18} />
          </span>
          <span className="hidden">Login</span>
        </div>
        <div className="flex gap-2 items-center">
          <span>
            <CartIcon width={18} height={18} />
          </span>
          <span className="hidden">Cart</span>
        </div>
      </div>
    </div>
  );
};
