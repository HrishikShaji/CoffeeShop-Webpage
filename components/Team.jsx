import React from "react";
import { teamMembers } from "./TeamMembers";
import Image from "next/image";

const Team = () => {
  return (
    <div className="w-full h-full bg-secondary-coffee">
      <h1 className="text-center text-4xl pt-8">YourCoffee Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center p-10">
        {teamMembers.map((teamMember, index) => (
          <div
            key={index}
            className=" flex flex-col justify-center items-center"
          >
            <Image
              src={teamMember.image}
              height={900}
              width={900}
              alt="image"
              className="h-[500px] w-[500px] object-cover "
            />
            <h2 className="text-2xl text-primary-coffee mt-3">
              {teamMember.name}
            </h2>
            <h1 className="text-xl text-primary-coffee mb-5">
              {teamMember.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
