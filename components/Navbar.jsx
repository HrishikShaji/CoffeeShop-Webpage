import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={
        toggle
          ? "w-full  h-screen z-20 bg-primary-coffee fixed flex flex-col justify-center items-center"
          : "w-full h-[100px] z-20 bg-primary-coffee fixed flex justify-between items-center px-5"
      }
    >
      <h1 className="text-2xl sm:text-4xl text-secondary-brown">YourCoffee</h1>
      <ul
        className={
          toggle
            ? "flex md:hidden  flex-col justify-center items-center"
            : "hidden"
        }
      >
        <a className="my-3 text-xl text-secondary-brown">Home</a>
        <a className="my-3 text-xl text-secondary-brown">About</a>
        <a className="my-3 text-xl text-secondary-brown">Our Team</a>
        <a className="my-3 text-xl text-secondary-brown">Shop</a>
        <a className="my-3 text-xl text-secondary-brown">Blog</a>

        <a className="mt-3 my-5 text-xl text-secondary-brown">Contact Us</a>
      </ul>
      <ul className="hidden md:flex justify-around px-5 items-center text-xl text-secondary-coffee">
        <a className="mx-5">Home</a>
        <a className="mx-5">About</a>
        <a className="mx-5">Our Team</a>
        <a className="mx-5">Shop</a>
        <a className="mx-5">Blog</a>

        <a className="mx-5">Contact Us</a>
        <button className="mx-5 border-secondary-coffee border-2 py-2 px-3">
          Buy now
        </button>
      </ul>
      <button
        className="p-2 rounded-md text-secondary-brown md:hidden bg-primary-brown"
        onClick={handleToggle}
      >
        menu
      </button>
    </div>
  );
};

export default Navbar;
