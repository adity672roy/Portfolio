import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>adityroy@gmail.com</h5>
            <a href="mailto:adityroy@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Adity_Roy</h5>
            <a href="https://m.me/AdduRizi" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9876543210</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+919876543210"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* ------------------------ */}

        <form action="">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            id="messsage"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
