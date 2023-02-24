import React from "react";

const Shop = () => {
  return (
    <div className="bg-checkout flex flex-col md:flex-row justify-around items-center p-[100px] bg-fixed bg-cover w-full">
      <div>
        <button className="mx-5 text-primary-coffee font-bold text-xl  border-secondary-coffee border-4 py-2 px-3">
          Checkout YourCoffee
        </button>
      </div>
      <p className="md:w-[30%] w-full my-10">
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum '
      </p>
    </div>
  );
};

export default Shop;
