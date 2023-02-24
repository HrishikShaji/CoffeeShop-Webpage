import React from "react";

const About = () => {
  return (
    <div className="bg-about flex justify-center items-center bg-cover bg-fixed  w-full">
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl text-secondary-coffee my-10">About us</h1>
        <p className="text-white sm:w-[70%] md:w-[40%]">
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum '
        </p>
      </div>
    </div>
  );
};

export default About;
