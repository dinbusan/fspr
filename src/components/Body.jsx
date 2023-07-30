import React from 'react'
import AnimatedRoutes from './AnimatedRoutes'

const Body = () => {
  return (
    <div className="sticky pb-5 w-full -mt-8 md:-mt-2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-800 via-gray-900 to-black min-h-screen">
      <AnimatedRoutes />
    </div>
  );
}

export default Body


