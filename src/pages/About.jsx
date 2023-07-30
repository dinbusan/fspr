import React from 'react'
import Jaci from "/assets/images/jaci.jpg";

const About = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-neutral-50 font-antique text-7xl text-center py-10">
        Our Team
      </h1>
      <div>
        <img className="object-cover aspect-square" src={Jaci} alt="" />
        <h2 className='text-neutral-50 font-antique text-center text-3xl my-5'>Jaclyn LáRen</h2>
        <p className='text-neutral-50 text-center font-antique'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, illo. Perspiciatis sunt quod esse delectus earum adipisci molestias architecto repudiandae sit ut fuga, nesciunt neque magni, quidem laboriosam necessitatibus suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem, quae nulla modi eius iure, veritatis illum maiores obcaecati natus numquam mollitia accusamus ipsam placeat facilis eos omnis at dicta?</p>
      </div>
    </div>
  );
}

export default About