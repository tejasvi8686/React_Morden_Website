import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg"
const About = () => {
  return (
    <div>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure consectetur nostrum voluptates voluptatum perspiciatis? Quia beatae libero at assumenda accusantium.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="our story image" />
          </div>

          <div className="about__section-content">
            <h1>Our story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              magnam corporis! Eos aperiam ad aliquid pariatur similique ipsum
              perspiciatis doloremque molestiae, officia maiores nostrum facere
              tenetur, ab distinctio id expedita voluptatibus quidem. Vero
              accusamus obcaecati officiis odio labore, quaerat illum.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, ut
              soluta ducimus repellendus eaque minima iure consequuntur dolorum
              doloremque, blanditiis unde numquam debitis quia. Commodi sequi
              delectus harum. Temporibus, nam.
            </p>
          
          </div>
        </div>
      </section> 

      <section className="about__vision">
        <div className="container about__vision-container">

          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              magnam corporis! Eos aperiam ad aliquid pariatur similique ipsum
              perspiciatis doloremque molestiae, officia maiores nostrum facere
              tenetur, ab distinctio id expedita voluptatibus quidem. Vero
              accusamus obcaecati officiis odio labore, quaerat illum.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, ut
              soluta ducimus repellendus eaque minima iure consequuntur dolorum
              doloremque, blanditiis unde numquam debitis quia. Commodi sequi
              delectus harum. Temporibus, nam.
            </p>
          
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="our Vision image" />
          </div>
        </div>
      </section>



      <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="our Mission image" />
        </div>

        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            magnam corporis! Eos aperiam ad aliquid pariatur similique ipsum
            perspiciatis doloremque molestiae, officia maiores nostrum facere
            tenetur, ab distinctio id expedita voluptatibus quidem. Vero
            accusamus obcaecati officiis odio labore, quaerat illum.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, ut
            soluta ducimus repellendus eaque minima iure consequuntur dolorum
            doloremque, blanditiis unde numquam debitis quia. Commodi sequi
            delectus harum. Temporibus, nam.
          </p>
        
        </div>
      </div>
    </section> 



      

      
    </div>
  );
};

export default About;
