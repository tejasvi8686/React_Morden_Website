import React, { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { testimonials } from "../data";
import SeactionHead from "./SeactionHead";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestimonialHandler = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return testimonials.length - 1;
      }
      return prev - 1;
    });
  };

  const nextTestimonialHandler = () => {
    setIndex((prev) => {
      if (prev === testimonials.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <section className="testimonials">
      <div className="container testimonials_container">
        <SeactionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonials__heads" />
        <Card className="testimonials">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonails__btn-container">
          <button className="testimonails__btn" onClick={prevTestimonialHandler}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className="testimonails__btn" onClick={nextTestimonialHandler}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
