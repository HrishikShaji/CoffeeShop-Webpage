import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen bg-primary bg-fixed bg-cover">
      <div className="flex flex-col justify-center p-5 items-center">
        <h1 className="text-6xl text-secondary-brown">YourCoffee</h1>
        <p className="text-md text-white text-center my-5 sm:w-[50%]">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '
        </p>
      </div>
      <div className="hidden md:block w-[40%]" />
    </div>
  );
};

export default Hero;
