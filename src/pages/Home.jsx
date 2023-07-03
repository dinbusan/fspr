import React from "react";
import Logo from "/assets/logo_white_no_bg_edited.png";

const Home = () => {
  return (
    <div className="pt-10">
      <div className="md:flex flex-row justify-center items-center">
        <h1 className="hidden md:block font-antique mx-auto text-white text-7xl text-left">
          Forsaken Souls Paranormal Research
        </h1>
        {/* <h1 className="flex md:hidden font-antique text-white text-5xl ms-10 text-left">
          Forsaken Souls Paranormal Research
        </h1> */}
        {/* <h1 className="block md:hidden font-antique mx-auto text-white text-lg ms-10 text-left">
          Saving the forsaken, speaking for the silent.
        </h1> */}
        <div className="w-full mx-auto -mt-10 md:mt-0">
          <img
            className="brightness-200 object-cover	"
            src={Logo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
