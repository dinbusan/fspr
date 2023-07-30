import React from "react";
import Logo from "/assets/logos/logo_white_no_bg_edited.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="fog relative h-[26rem] w-full">
        <div className="brightness-200 absolute h-[28rem] w-full bg-cover md:bg-contain bg-top lg:bg-left bg-logo xl:bg-[center_right_20rem] bg-no-repeat">
          <div className="text-white z-30 font-antique absolute right-1 bottom-1 lg:bottom-40 xl:bottom-10 lg:right-11 xl:left-64 xl:tracking-wider opacity-30 tracking-widest">
            <h1 className="hidden lg:block text-7xl xl:text-8xl ">
              Forsaken
              <br className="hidden xl:block" /> Souls
              <br /> Paranormal <br className="hidden xl:block" />
              Research
            </h1>
          </div>
          <div className="fog-container opacity-90 overflow-hidden z-1 w-full h-full absolute">
            <div className="fog-img h-full fog-img-first"></div>
            <div className="fog-img h-full fog-img-second"></div>
          </div>
        </div>
      </div>
      <div className="mx-5 mt-2 pb-5">
        <h1 className="relative opacity-90 font-metal text-white text-3xl lg:text-5xl xl:text-4xl xl:opacity-75 tracking-widest lg:tracking-wider px-2 pb-8 text-center">
          Saving the forsaken,
          <br className="md:hidden" /> speaking for the silent
        </h1>
        <p className="font-antique xl:w-2/3 xl:mx-auto text-neutral-300 text-left md:text-center text-lg ">
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
          <span className="w-full h-full bg-gradient-to-br from-[#6366f1] via-[#000] to-[#6366f1] group-hover:from-[#6366f1] group-hover:to-[#6366f1] absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white font-extralight">CONTACT US</span>
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:mx-5  gap-y-5  lg:gap-5">
        <img
          className="w-full h-full object-cover"
          src="/assets/images/business_card_1.jpeg"
          alt=""
        />
        <img
          className="h-full object-cover"
          src="/assets/images/cemetary.jpeg"
          alt=""
        />
        <img
          className="h-full object-cover"
          src="/assets/images/jail_2.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
