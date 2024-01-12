import "./Contact.css";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_fcv3vnq", "template_f8nggr2", form.current, "bfvAXSF_R852U5thY")
      .then(
        (result) => {
          e.target.reset();
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <LiaTelegramPlane className="contact-option-icon" />
            <h4>Telegram</h4>
            <h5>Dthon</h5>
            <a href="https://t.me/DThon" target="_blank" rel="noreferrer" >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>+569 8413 7867</h5>
            <a href="https://api.whatsapp.com/send?phone=56984137867" target="_blank" rel="noreferrer" >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder="Your full name" required />
          <input type="email" name="email" id="" placeholder="Your email" required />
          <textarea name="message" id="" rows="7" placeholder="Your message" required ></textarea>
          <button type="submit" className="btn btn-primary" >Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
