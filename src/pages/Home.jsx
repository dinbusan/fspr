import React from "react";
import Logo from "/assets/logo_white_no_bg_edited.png";

const Home = () => {
  return (
    <div className="">
      <div className="fancy_radius bg-gradient-to-br from-neutral-800 to-zinc-300 h-96 w-full relative text-right pe-10">
        <img
          className="fancy_radius w-full h-full  absolute mix-blend-hard-light"
          src="/assets/smoke_bg.jpg"
          alt=""
        />

        {/* <div className="absolute inset-x-0 bottom-0 h-24 "></div> */}

        <div className="pt-10">
          <h1 className="font-antique text-7xl text-white">
            Forsaken Souls Paranormal Research
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
