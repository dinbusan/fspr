import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
