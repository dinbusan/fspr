import React from "react";
import Logo from "/assets/logo_white_no_bg_edited.png";

const Home = () => {
  return (
    <div className="pt-16">
      <div className="md:flex flex-row justify-center">
        <h1 className="hidden md:block font-antique text-transparent text-7xl text-right w-1/2 ms-3 bg-gradient-to-r from-black to-zinc-400 bg-clip-text">
          Forsaken Souls Paranormal Research
        </h1>
        {/* <h1 className="flex md:hidden font-antique text-white text-5xl ms-10 text-left">
          Forsaken Souls Paranormal Research
        </h1> */}
        {/* <h1 className="block md:hidden font-antique mx-auto text-white text-lg ms-10 text-left">
          Saving the forsaken, speaking for the silent.
        </h1> */}
        <div className="w-full mx-auto md:me-10 relative bg-gradient-to-r from-black to-zinc-100 flex items-center">
          <img
            className="object-cover	absolute mix-blend-overlay"
            src={Logo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
