import React from "react";
import Logo from "/assets/logo_no_bg.png";

const Home = () => {
  return (
    <div className="flex justify-center align-center bg-gradient-to-br from-neutral-950 to-pink-600 ">
      <div>
        <img
          className="mix-blend-darken w-1/2 object-cover"
          src={Logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
