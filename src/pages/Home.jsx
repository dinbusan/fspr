import React from "react";
import Logo from "/assets/logo_no_bg.png";

const Home = () => {
  return (
    <div className="flex h-[100vh] relative bg-gradient-to-br from-neutral-950 to-pink-600 ">
      <div className="mix-blend-darken w-full flex justify-center">
        <img className="object-cover h-3/4" src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Home;
