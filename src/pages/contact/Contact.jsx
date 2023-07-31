import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        cupiditate eos iure temporibus, porro reprehenderit dignissimos dolorem
        adipisci dolore amet!
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:support@egattor"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail />
            </a>

            <a
              href="https://m.me/yourPage"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>

            <a
              href="https://wa.me/yourNumber"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
