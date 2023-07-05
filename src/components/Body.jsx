import React from 'react'
import AnimatedRoutes from './AnimatedRoutes'

const Body = () => {
  return (
    <div className="sticky w-full -mt-1 bg-gradient-to-tl from-gray-700 via-gray-900 to-black min-h-screen">
      <AnimatedRoutes />
    </div>
  );
}

export default Body