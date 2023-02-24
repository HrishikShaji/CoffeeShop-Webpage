import React from "react";
import Image from "next/image";
import { images } from "@/public/assets/images";

const MenuCard = ({ title, price, content, image }) => {
  return (
    <div className="flex justify-between items-center p-2 md:w-[400px] w-[80%] h-[100px] md:h-[130px] bg-secondary-coffee rounded-md">
      <Image
        src={image}
        height={900}
        width={900}
        alt="image"
        className="h-[80px] w-[80px] mr-4 rounded-full object-cover"
      />
      <div className="py-3">
        <div className="flex justify-between items-center">
          <h1>{title}</h1>
          <h2>{price}</h2>
        </div>

        <p className="text-primary-brown">{content}</p>
      </div>
    </div>
  );
};

export default MenuCard;
