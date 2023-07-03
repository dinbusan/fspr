import React from "react";
import Logo from "/assets/logo_white_no_bg.png";

const Home = () => {
  return (
    <div className="pt-10">
      <div className="md:flex justify-center">
        <h1 className="hidden md:block font-antique mx-auto text-white text-5xl text-center">
          Forsaken Souls Paranormal Research
        </h1>
        <h1 className="flex md:hidden font-antique text-white text-4xl text-center">
          Forsaken Souls Paranormal Research
        </h1>
        <hr className="w-1/4 mx-auto my-10"/>
        <h1 className="block md:hidden font-antique mx-auto text-white text-2xl text-center">
          Saving the forsaken, speaking for the silent.
        </h1>
        <div className="w-full mx-auto -mt-10 md:mt-0">
          <img className="brightness-200 object-cover	" src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
