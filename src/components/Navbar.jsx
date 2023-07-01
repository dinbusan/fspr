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
    <nav className="sticky flex z-30 top-0">
      {currentPath === "/" ? (
        <Link className={classNames("")} onClick={scrollToTop} to="/">
          FSPR
        </Link>
      ) : (
        <Link className="" to="/">
          FSPR
        </Link>
      )}
      <ul>
        <CustomLink className="" to="/">
          Home
        </CustomLink>
      </ul>
      {/*hamburger*/}
      <div onClick={handleClick} className="md:hidden ml-auto py-5 z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "fixed top-0 font-thasadith left-0 w-full h-screen bg-neutral-900 object-cover flex flex-col pt-36 items-center"
        }
      >
        <li className="py-6 text-4xl">
          <NavLink onClick={handleClick} to="/">
            Home
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
