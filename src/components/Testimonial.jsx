import React, { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { testimonials } from "../data";
import SeactionHead from "./SeactionHead";

const Testimonial = () => {
    const [index, setIndex] = useState(1)
    const { name, quote, job, avatar} = testimonials[index];

    return (
    <section className="testimonials">
      <div className="container testimonials_container">
        <SeactionHead icon={<ImQuotesLeft />} title="Testimonials" />
        <Card className="testimonials">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonails__btn-container">
          
         <button className="testimonails__btn"></button>
        
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
