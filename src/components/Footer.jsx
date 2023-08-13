import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="z-20 text-xs py-2 font-antique text-center sticky top-[100vh] text-neutral-50 bg-neutral-950 text-neutral-50">
      <div className="">
        <p className="leading-4">
          Forsaken Souls Paranormal Research
          <br />
          <Link className="md:hidden" to="tel:8149520840">
            (814) 952-0840
          </Link>
          2023 FSPR
          <br />
          Follow us at:
        </p>
        <div className="justify-center pt-1 flex text-lg ">
          <a href="https://www.instagram.com/Forsakensouls_PRG/">
            <FaInstagram className="mx-1 hover:text-neutral-400 duration-300" />
          </a>
          <a href="https://www.facebook.com/groups/256692230146102">
            <FaFacebook className="mx-1 hover:text-neutral-400 duration-300" />
          </a>
          <a href="https://www.youtube.com/@ForsakenSouls_PRG/">
            <FaYoutube
              className="mx-1 hover:text-neutral-400 duration-300"
              icon="fa-brands fa-youtube"
            />
          </a>
          <a href="https://www.tiktok.com/@forsakensouls_prg/">
            <FaTiktok
              className="mx-1 hover:text-neutral-400 duration-300"
              icon="fa-brands fa-tiktok"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
