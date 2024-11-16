import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { motion } from 'framer-motion'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      
      const apiKey = process.env.REACT_APP_WEB3FORMS_API_KEY;
      formData.append("access_key", apiKey);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='container contact'>
      <motion.div initial={{x: -200, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1}} className='contact-col'>
        <h3>Send me a message <img src={msg_icon}/></h3>
        <p>Feel free to reach out through the contact form or the details below. 
            I’m always open to discussing new projects, 
            ideas, or collaboration opportunities in web and mobile app development.
        </p>
        <ul>
            <li><img src={mail_icon} />amir.amirov@alumni.nu.edu.kz</li>
            <li><img src={phone_icon} />+7 707-430-4349</li>
            <li><img src={location_icon} />53 Kabanbay batyr Ave., Astana<br/>
            010000, Kazakhstan</li>
        </ul>
      </motion.div>
      <motion.div initial={{x: 200, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1}} className='contact-col'>
        <form onSubmit={onSubmit}> 
            <label>Your name</label>
            <input type="text" name="name" placeholder='Enter your name' required/>
            <label>Phone number</label>
            <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type='submit' className='btn dark-btn'>Submit now <img src={white_arrow}/></motion.button>
        </form>
        <span>{result}</span>
      </motion.div>
    </div>
  )
}

export default Contact