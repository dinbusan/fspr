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
    <nav className="sticky font-antique text-xl py-7 flex z-30 top-0 bg-black text-neutral-50">
      {currentPath === "/" ? (
        <Link
          className={classNames("mx-10 py-5 text-4xl")}
          onClick={scrollToTop}
          to="/"
        >
          FSPR
        </Link>
      ) : (
        <Link className="mx-10 py-5 text-4xl" to="/">
          FSPR
        </Link>
      )}
      <ul className="hidden md:flex ml-auto space-x-5 me-10">
        <CustomLink className="" to="/">
          HOME
        </CustomLink>
        <CustomLink className="" to="/about">
          ABOUT
        </CustomLink>
        <CustomLink className="" to="/team">
          OUR TEAM
        </CustomLink>
        <CustomLink className="" to="/cases">
          NOTABLE CASES
        </CustomLink>
        <CustomLink className="" to="/tools">
          TOOLS
        </CustomLink>
        <CustomLink className="" to="/contact">
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
            : "fixed top-0 font-antique left-0 w-full my-gradient h-screen object-cover flex flex-col pt-36 items-center"
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
            OUR TEAM
          </NavLink>
        </li>
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/cases">
            NOTABLE CASES
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