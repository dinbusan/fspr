import React from "react";
import Logo from "/assets/logos/logo_white_no_bg_edited.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="fog relative h-[32rem] w-full ">
        <div className="absolute h-[32rem] w-full bg-cover md:bg-contain bg-no-repeat bg-center lg:bg-left bg-logo pb-10 ">
          <div className="text-neutral-200 lg:flex lg:flex-col lg:text-right  font-antique absolute w-full flex justify-center bottom-1">
            <h1 className="hidden lg:block text-7xl">
              Forsaken Souls
              <br /> Paranormal Research
            </h1>
            <h1 className="font-metal text-3xl tracking-widest px-2 pb-2 text-center">
              Saving the forsaken, speaking for the silent
            </h1>
          </div>
          <div className="fog-container overflow-hidden z-1 w-full h-full absolute">
            <div className="fog-img h-full fog-img-first"></div>
            <div className="fog-img h-full fog-img-second"></div>
          </div>
        </div>
      </div>
      <div className="mx-5 mt-5 pb-5">
        <p className="font-antique text-neutral-300 text-left text-lg ">
          We are a team of experienced professionals who research and
          investigate a wide-variety of paranormal phenomenon ranging from
          traditional and residual hauntings to poltergeist and demonic
          infestation.
          <br /> With backgrounds in law enforcement, military intelligence,
          criminal investigations, and research analysis, we specialize in
          investigating cold case crimes, missing persons cases, and demonic
          attachment cases.
          <br /> Our goal is to provide confidential, compassionate, and
          professional investigative and support services to those in need of
          help, and to ultimately validate or debunk the presence of entities,
          all of which is conducted in a fair and impartial manner with the
          utmost respect, honor, and integrity.
        </p>
      </div>
      <div className="flex justify-center my-5">
        <Link
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
          to="/contact"
        >
          <span class="w-full h-full bg-gradient-to-br from-[#81A6E7] via-[#000] to-[#ff00c6] group-hover:from-[#81A6E7] group-hover:via-[#000] group-hover:to-[#ff00c6] absolute"></span>
          <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span class="relative text-white">CONTACT US</span>
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:mx-5  gap-y-5  lg:gap-5">
        <img className="w-full h-full object-cover" src="/assets/images/business_card_1.jpeg" alt="" />
        <img className="h-full object-cover" src="/assets/images/cemetary.jpeg" alt="" />
        <img className="h-full object-cover" src="/assets/images/jail_2.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Home;
