import React from "react";
import Logo from "/assets/logo_white_no_bg_edited.png";

const Home = () => {
  return (
    <div className="">
      <div className="fancy_radius bg-gradient-to-bl from-neutral-950 to-neutral-300  h-96 w-full relative text-right ">
        <img
          className="fancy_radius object-cover w-full h-full absolute mix-blend-overlay"
          src="/assets/smoke_bg_2.jpg"
          alt=""
        />

        {/* <div className="absolute inset-x-0 bottom-0 h-24 "></div> */}

        <div className="pt-10">
          <h1 className="pe-10 font-antique text-7xl text-white">
            Forsaken Souls Paranormal Research
          </h1>
        </div>
          <h1 className="font-antique text-white text-xl mx-auto text-center ">
            Saving the forsaken, speaking for the silent.
          </h1>
      </div>
    </div>
  );
};

export default Home;
