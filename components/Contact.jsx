import React from "react";

const Contact = () => {
  return (
    <div className="h-screen w-full bg-primary-coffee flex flex-col justify-center items-center">
      <h1 className="text-4xl text-secondary-coffee">Visit YourCoffee</h1>
      <p className="w-[50%] text-center my-4 md:my-7 text-secondary-brown">
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa.
      </p>
      <div>
        <div className="border 4 border-secondary-coffee">
          <h2 className="text-center my-4 text-2xl">Working Hours</h2>
          <ul>
            <li className="flex p-3 justify-between text-secondary-coffee">
              <h2>Monday</h2>
              <h2 className="ml-10">9.00AM - 9.00PM</h2>
            </li>
            <li className="flex p-3 justify-between text-secondary-coffee">
              <h2>Tuesday</h2>
              <h2 className="ml-10">9.00AM - 9.00PM</h2>
            </li>
            <li className="flex p-3 justify-between text-secondary-coffee">
              <h2>Wednesday</h2>
              <h2 className="ml-10">9.00AM - 9.00PM</h2>
            </li>
            <li className="flex p-3 justify-between text-secondary-coffee">
              <h2>Thursday</h2>
              <h2 className="ml-10">9.00AM - 9.00PM</h2>
            </li>
            <li className="flex p-3 justify-between text-secondary-coffee">
              <h2>Friday</h2>
              <h2 className="ml-10">9.00AM - 9.00PM</h2>
            </li>
            <li className="flex p-3 justify-between text-secondary-coffee">
              <h2>Saturday</h2>
              <h2 className="ml-10">9.00AM - 9.00PM</h2>
            </li>
            <li className="flex p-3 justify-between text-secondary-coffee">
              <h2>Sunday</h2>
              <h2 className="ml-10">9.00AM - 9.00PM</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
