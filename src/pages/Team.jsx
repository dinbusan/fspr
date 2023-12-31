import React from "react";
import Jaci from "/assets/images/jaci.jpg";
import Johnny from "/assets/images/johnny_cropped.jpg"
import Empty from "/assets/images/empty.png";
import { motion } from "framer-motion";

const Team = () => {
  return (
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-5 mx-auto"
    >
      <h1 className="text-neutral-50 font-antique text-7xl text-center pt-10">
        Our Team
      </h1>
      <div className="md:flex justify-center xl:w-2/3 mx-auto pt-10">
        <div className="w-full md:w-1/2 md:mx-auto md:px-5 xl:w-1/3 mb-5">
          <img
            className="object-cover aspect-square rounded-full"
            src={Jaci}
            alt=""
          />
          <h2 className="text-neutral-50 font-antique text-center text-3xl mt-5">
            Jaclyn LáRen
          </h2>
          <h2 className="text-neutral-50 font-antique text-center text-xl mb-5">
            Founder
          </h2>
          <p className="text-neutral-50 text-center font-antique mx-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
            illo. Perspiciatis sunt quod esse delectus earum adipisci molestias
            architecto repudiandae sit ut fuga, nesciunt neque magni, quidem
            laboriosam necessitatibus suscipit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. A exercitationem, quae nulla modi eius
            iure, veritatis illum maiores obcaecati natus numquam mollitia
            accusamus ipsam placeat facilis eos omnis at dicta?
          </p>
        </div>
        <div className="w-full md:w-1/2 md:mx-10 md:mx-auto md:px-5 xl:w-1/3 mb-5">
          <img
            className="object-cover aspect-square rounded-full"
            src={Johnny}
            alt=""
          />
          <h2 className="text-neutral-50 font-antique text-center text-3xl mt-5">
            Johnny Vega
          </h2>
          <h2 className="text-neutral-50 font-antique text-center text-xl mb-5">
            Co-Founder
          </h2>

          <p className="text-neutral-50 text-center font-antique mx-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
            illo. Perspiciatis sunt quod esse delectus earum adipisci molestias
            architecto repudiandae sit ut fuga, nesciunt neque magni, quidem
            laboriosam necessitatibus suscipit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. A exercitationem, quae nulla modi eius
            iure, veritatis illum maiores obcaecati natus numquam mollitia
            accusamus ipsam placeat facilis eos omnis at dicta?
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
