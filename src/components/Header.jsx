import React from "react";
import { FaTractor } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7f3e7] dark:border-b-surface-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md px-10 py-3 ">
      <div className="flex items-center gap-4 text-text-main dark:text-white">
        <div className="size-8 flex items-center justify-center text-primary">
          {/*  <span className="material-symbols-outlined text-3xl">agriculture</span> */}
          <FaTractor className="material-symbols-outlined text-3xl" />
        </div>
        <h2 className="text-text-main dark:text-black text-xl font-bold leading-tight tracking-[-0.015em]">
          Sumedha Agro
        </h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a
            className="text-text-main dark:text-black text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="/"
          >
            Home
          </a>
          <a
            className="text-text-main dark:text-black text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="#story"
          >
            Our Story
          </a>
          <a
            className="text-text-main dark:text-black text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="/products"
          >
            Products
          </a>
          <a
            className="text-text-main dark:text-black text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="/contact"
          >
            Contact
          </a>
          <a
            className="text-text-main dark:text-black text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="/Showcase"
          >
            showcase
          </a>
        </div>
        <button className="px-6 py-2 rounded-full font-semisolid text-black bg-green-400 shadow-md hover:scale-105 transition-transform duration-200">
          <span className="truncate">Get a Quote</span>
        </button>
      </div>
      <div classn="md:hidden">
        <button className="text-text-main dark:text-white"></button>
      </div>
    </header>
  );
}
