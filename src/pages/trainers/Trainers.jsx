import React from "react";
import "./trainers.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Trainer from "../../components/Trainer";

const Trainers = () => {
  return (
    <div>
      <Header title="our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        iure delectus quisquam, officia est nobis.
      </Header>

      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return    <Trainer
              key={id}
              image={image}
              name={name}
              job={job}
              socials={[
                { icon: <BsInstagram />, link: socials[0] },
                { icon: <BsTwitter />, link: socials[1] },
                { icon: <BsFacebook />, link: socials[2] },
                { icon: <BsLinkedin />, link: socials[3] },
              ]}
            />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Trainers;
