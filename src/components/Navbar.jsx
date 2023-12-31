import React, { useState } from "react";
import {
  Link,
  useMatch,
  useResolvedPath,
  NavLink,
  useLocation,
} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import useScrollPosition from "../hooks/useScrollPosition";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const location = useLocation();
  const currentPath = location.pathname;

  const classNames = (...classes) => classes.filter(Boolean).join(" ");

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <nav
      className={classNames(
        scrollPosition > 80 ? "bg-opacity-25" : "bg-opacity-100",
        "sticky font-antique text-center text-lg md:text-base lg:text-2xl tracking-widest md:py-2 flex items-center z-30 top-0 bg-neutral-950 text-neutral-50 duration-500"
      )}
    >
      {currentPath === "/" ? (
        <Link className="text-4xl" onClick={scrollToTop} to="/">
          <div className="flex flex-row items-center mx-2">
            <img
              className="object-cover h-14 m-2"
              src="./assets/logos/skull_no_bg.png"
              alt=""
            />
            FSPR
          </div>
        </Link>
      ) : (
        <Link className="text-4xl" to="/">
          <div className="flex flex-row items-center mx-2">
            <img
              className="object-cover h-14 m-2"
              src="./assets/logos/skull_no_bg.png"
              alt=""
            />
            FSPR
          </div>
        </Link>
      )}
      <ul className="hidden md:flex ml-auto space-x-5 md:space-x-3 me-10 md:me-5 ">
        <CustomLink className="hover:text-indigo-300 duration-300" to="/">
          HOME
        </CustomLink>
        <CustomLink className="hover:text-indigo-300 duration-300" to="/about">
          ABOUT
        </CustomLink>
        <CustomLink className="hover:text-indigo-300 duration-300" to="/team">
          TEAM
        </CustomLink>
        <CustomLink className="hover:text-indigo-300 duration-300" to="/cases">
          CASES
        </CustomLink>
        <CustomLink className="hover:text-indigo-300 duration-300" to="/tools">
          TOOLS
        </CustomLink>
        <CustomLink
          className="hover:text-indigo-300 duration-300"
          to="/contact"
        >
          CONTACT
        </CustomLink>
      </ul>
      {/*hamburger*/}
      <div
        onClick={handleClick}
        className="md:hidden ml-auto py-5 z-10 text-3xl mx-5 text-neutral-50"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "fixed top-0 font-antique left-0 w-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-800 via-gray-900 to-black h-screen object-cover flex flex-col pt-36 items-center"
        }
      >
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/">
            HOME
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/about">
            ABOUT
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/team">
            TEAM
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/cases">
            CASES
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/tools">
            TOOLS
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
