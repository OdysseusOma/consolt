import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './home.css'


const NewsletterSubscribe = () => {
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_sla4yzg', 'template_q2pjxu4', form.current, '_o6tQdMbGlAkLExfW')
      .then((result) => {
        alert("Email sent successfully!");
      }, (error) => {
        alert(error+"Please try again!");
      });

      e.target.reset()
  };

      const form = useRef();


  return (
    <form className='useForm' ref={form} onSubmit={sendEmail}>
      <input placeholder='Your Email' type="email" name="user_email" />
      <button className='formBtn' type="submit" value="Send">Subscribe</button>
      {/* End of form */}
    </form>
  );
      
    
  }

export default NewsletterSubscribe