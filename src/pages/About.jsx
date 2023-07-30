import React from "react";
import Team from "/assets/images/team_cropped.jpg";

const About = () => {
  return (
    <div>
      <h1 className="text-neutral-50 mx-5 font-antique text-3xl text-center pt-10">
        ABOUT
      </h1>
      <img
        className="aspect-square object-cover object-bottom mt-8 mb-5 md:w-1/2 md:mx-auto xl:w-1/4"
        src={Team}
        alt=""
      />
      <div className="text-neutral-50 mx-5 font-antique text-lg text-center lg:w-3/4 lg:mx-auto lg:text-left">
        <p className="">
          We are a team of experienced professionals who research and
          investigate a wide-variety of paranormal phenomenon ranging from
          traditional and residual hauntings to poltergeist and demonic
          infestation. With backgrounds in law enforcement, military
          intelligence, criminal investigations, and research analysis, we
          specialize in investigating cold case crimes, missing persons cases,
          and demonic attachment cases.
        </p>
        <p className="mt-5">
          Our goal is to provide confidential, compassionate, and professional
          investigative and support services to those in need of help, and to
          ultimately validate or debunk the presence of entities, all of which
          is conducted in a fair and impartial manner with the utmost respect,
          honor, and integrity.
        </p>
        <h1 className="text-3xl text-center pt-10 pb-5">SERVICES</h1>
        <p>
          With 23+ years of extensive, detail-oriented experience, our team of
          professionals wide-variety of Paranormal Phenomenon including, but NOT
          limited to:
        </p>
        <div className="text-xl md:justify-center md:flex leading-9">
          
          <ul className="list-disc mx-10 my-5 text-left">
            <li>Traditional Hauntings</li>
            <li>Residuals are Hauntings</li>
            <li>Poltergeist Activity</li>
            <li>Haunted Objects & Attachments</li>
            <li>Demonic Infestation & Possession</li>
            <li>Cold Case Crimes</li>
            <li>Missing Persons Cases</li>
            <li>Psychic-Medium Investigations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
