import React from "react";
import MenuCard from "./MenuCard";
import { MenuItems } from "./MenuItems";

const Menu = () => {
  return (
    <div className=" w-full h-full md:h-screen py-10 md:py-0 bg-menu bg-fixed bg-cover flex flex-col justify-center  ">
      <div className="flex justify-around items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl my-5 ">YourCoffee Menu</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
            {MenuItems.map((menu, index) => (
              <MenuCard
                key={index}
                title={menu.title}
                price={menu.price}
                content={menu.content}
                image={menu.image}
              />
            ))}
          </div>
        </div>
        <div className="hidden md:block w-[20%]" />
      </div>
    </div>
  );
};

export default Menu;
