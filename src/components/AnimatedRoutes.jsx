import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cases from "../pages/Cases";
import Team from "../pages/Team";
import About from "../pages/About";
import Tools from "../pages/Tools";
import Contact from "../pages/Contact";

const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
