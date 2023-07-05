import React from "react";
import Logo from "/assets/logo_white_no_bg_edited.png";

const Home = () => {
  return (
    <div className="">
      <div className="fog relative h-[100vh] w-full ">
        <div className="absolute h-96  w-full bg-contain bg-no-repeat bg-center bg-logo pb-10">
          <div className="logo text-neutral-300 font-antique absolute w-full flex justify-center bottom-5 text-xl">
            <h1>Saving the forsaken, speaking for the silent.</h1>
          </div>
          <div className="fog-container overflow-hidden z-1 w-full h-full absolute">
            <div className="fog-img h-full fog-img-first"></div>
            <div className="fog-img h-full fog-img-second"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
