import React, {useRef} from 'react'
import './contact.css'
import emailjs from 'emailjs-com';

//import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const numberPhone = '5553984363504'
const whatsappLink = "https://api.whatsapp.com/send?phone="+numberPhone
//const emailLink = "mailto:dummyegator@gmail.com"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rut7g52', 'template_4d9l0mc', form.current, 'zXv6wTwWzVlJjtULv')
    e.target.reset()
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href={emailLink} target="#blank"> Send a message</a>
          </article> */}

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <a href={whatsappLink} target="#blank"> Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact