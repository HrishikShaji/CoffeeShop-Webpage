import React from "react";

const Footer = () => {
  return (
    <div className="h-full flex flex-col md:flex-row justify-center md:justify-evenly items-center w-full bg-black p-[100px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-secondary-coffee text-3xl my-3">YourCoffee</h1>
        <p className="text-center md:w-[40%] w-[90%]  text-secondary-coffee">
          'Lorem ipsum dolor o ligula eget dolor. Aa. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur '
        </p>
      </div>
      <div className="hidden md:flex flex-col justify-center mr-[100px] text-center md:text-left">
        <h2 className="text-secondary-coffee">YourCoffee Cafe</h2>
        <h2 className="text-secondary-coffee">0123456789</h2>
        <h2 className="text-secondary-coffee">yourcoffee@gmail.com</h2>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 md:mt-0">
        <h1 className="text-secondary-coffee">Subscribe to our NEWSLETTTER</h1>
        <div className="flex my-3">
          <input type="email" placeholder="Email..." className="p-2" />
          <button className="text-secondary-coffee p-3 border-4">
            Subscribe
          </button>
        </div>
      </div>
      <div className="text-center mt-10 md:hidden">
        <h2 className="text-secondary-coffee">YourCoffee Cafe</h2>
        <h2 className="text-secondary-coffee">0123456789</h2>
        <h2 className="text-secondary-coffee">yourcoffee@gmail.com</h2>
      </div>
    </div>
  );
};

export default Footer;
