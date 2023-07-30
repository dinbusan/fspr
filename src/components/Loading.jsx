import React from 'react'
import Logo from "/assets/logos/logo_no_bg.png";

const Loading = () => {
  return (
    <div className="h-screen flex items-center bg-black ">
      <img className="animate-pulse" src={Logo} alt="" />
    </div>
  );
}

export default Loading