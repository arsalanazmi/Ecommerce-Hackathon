"use client";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center h-6 md:h-[4.167vw] px-[3.338vw] bg-white shadow-md relative">
      {/* Logo */}
      <div>
        <img src="/assets/images/logo.png" alt="logo" className="w-[5.449vw]" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex pl-[9.338vw]">
        <ul className="flex justify-center items-center gap-[1.042vw] list-none">
          <li className="text-[1.111vw] font-medium">New & Featured</li>
          <li className="text-[1.111vw] font-medium">Men</li>
          <li className="text-[1.111vw] font-medium">Women</li>
          <li className="text-[1.111vw] font-medium">Kids</li>
          <li className="text-[1.111vw] font-medium">Sale</li>
          <li className="text-[1.111vw] font-medium">SNKRS</li>
        </ul>
      </div>

      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="text-gray-700 md:hidden focus:outline-none"
      >
        <img
          src="/assets/images/hamburger.png"
          alt="Menu"
          className="w-4 h-4"
        />
      </button>

      {/* Mobile Navigation with Animation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Logo and Close Button in a Single Line */}
        <div className="flex justify-between items-center py-3 px-4">
          {/* Logo */}
          <img src="/assets/images/logo.png" alt="logo" className="w-[35%]" />
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <img
              src="/assets/images/close.jpeg"
              alt="Close"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col items-start gap-6 p-6 list-none">
          <li className="text-lg font-medium">New & Featured</li>
          <li className="text-lg font-medium">Men</li>
          <li className="text-lg font-medium">Women</li>
          <li className="text-lg font-medium">Kids</li>
          <li className="text-lg font-medium">Sale</li>
          <li className="text-lg font-medium">SNKRS</li>
        </ul>

        {/* Search and Icons */}
        <div className="flex flex-col items-start gap-4 p-6">
          <div className="relative w-full">
            <img
              src="/assets/images/search.png"
              alt="search"
              className="w-5 h-5 absolute top-2 left-2"
            />
            <input
              type="search"
              placeholder="Search"
              className="bg-[#F5F5F5] w-full h-10 pl-10 pr-4 rounded-3xl text-sm"
            />
          </div>
          <div className="flex gap-4">
            <img
              src="/assets/images/wishlist.png"
              alt="wishlist"
              className="w-6 h-6"
            />
            <img src="/assets/images/cart.png" alt="cart" className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Search and Icons (Desktop) */}
      <div className="hidden md:flex justify-center items-center gap-[1vw]">
        <div className="relative">
          <img
            src="/assets/images/search.png"
            alt="search"
            className="w-[1.667vw] h-[1.667vw] absolute top-[0.6vw] left-[0.6vw]"
          />
          <input
            type="search"
            placeholder="Search"
            className="bg-[#F5F5F5] w-[12.5vw] h-[2.778vw] pl-[2.5vw] pr-[0.8vw] rounded-[6.944vw] text-[1.111vw]"
          />
        </div>
        <img
          src="/assets/images/wishlist.png"
          alt="wishlist"
          className="w-[1.667vw] h-[1.667vw]"
        />
        <img
          src="/assets/images/cart.png"
          alt="cart"
          className="w-[1.667vw] h-[1.667vw]"
        />
      </div>
    </header>
  );
};

export default Header;
