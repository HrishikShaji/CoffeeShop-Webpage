import React from "react";
import Image from "next/image";
import { images } from "@/public/assets/images";

const Explore = () => {
  return (
    <div className="h-full md:h-screen flex justify-center items-center w-full bg-secondary-coffee">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl mt-10 md:mt-0">Explore YourCoffee</h1>
        <p className="my-10 w-[50%] text-center">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur '
        </p>
        <div className="md:flex-row flex flex-col justify-around items-center">
          <div className="bg-primary-brown rounded-md mx-10 my-10 p-5 flex flex-col justify-center items-center">
            <Image
              src={images.img10}
              height={900}
              width={900}
              className="h-[100px] w-[100px]"
              alt="image"
            />
            <h1 className="text-secondary-brown text-2xl mt-5">Desserts</h1>
            <p className="my-5 w-[50%] text-center text-secondary-coffee">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <button className="p-2 bg-secondary-brown text-primary-coffee rounded-md">
              Explore
            </button>
          </div>
          <div className="bg-primary-brown rounded-md mx-10 my-10 p-5 flex flex-col justify-center items-center">
            <Image
              src={images.img8}
              height={900}
              width={900}
              className="h-[100px] w-[100px]"
              alt="image"
            />
            <h1 className="text-secondary-brown text-2xl mt-5">Coffee Beans</h1>
            <p className="my-5 w-[50%] text-center text-secondary-coffee">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <button className="p-2 bg-secondary-brown text-primary-coffee rounded-md">
              Explore
            </button>
          </div>
          <div className="bg-primary-brown rounded-md  mx-10 my-10 p-5 flex flex-col justify-center items-center">
            <Image
              src={images.img11}
              height={900}
              width={900}
              className="h-[100px] w-[100px]"
              alt="image"
            />
            <h1 className="text-secondary-brown text-2xl mt-5">Coffee</h1>
            <p className="my-5 w-[50%] text-center text-secondary-coffee">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <button className="p-2 bg-secondary-brown text-primary-coffee rounded-md">
              Explore
            </button>
          </div>
          <div className="bg-primary-brown rounded-md mx-10 my-10 p-5 flex flex-col justify-center items-center">
            <Image
              src={images.img9}
              height={900}
              width={900}
              className="h-[100px] w-[100px]"
              alt="image"
            />
            <h1 className="text-secondary-brown text-2xl mt-5">
              Coffee Grounds
            </h1>
            <p className="my-5 w-[50%] text-center text-secondary-coffee">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <button className="p-2 bg-secondary-brown text-primary-coffee rounded-md">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
