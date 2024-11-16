import React from 'react'
import "./Skill.css"
import { motion } from 'framer-motion';
import SkillCard from '../SkillCard/SkillCard';
import TailwindIcon from "../../assets/images/tailwindcss.svg"
import NodeJSIcon from '../../assets/images/nodejs.svg'
import ExpressJSIcon from '../../assets/images/expressjs.svg'
import MongoDBIcon from '../../assets/images/mongodb.svg'
import ReactIcon from '../../assets/images/react.svg'
import JavascriptIcon from '../../assets/images/javascript.svg'
import CSSIcon from '../../assets/images/css3.svg'
import FirebaseIcon from '../../assets/images/firebase.webp'
import WebSocketIcon from '../../assets/images/websocket.svg'
import Title from '../Title/Title';

const Skill = () => {

  const skillItem = [
    {
      imgSrc: FirebaseIcon,
      label: 'Firebase',
      desc: 'Cloud Messaging'
    },
    {
      imgSrc: CSSIcon,
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: JavascriptIcon,
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: NodeJSIcon,
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: ExpressJSIcon,
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: MongoDBIcon,
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: ReactIcon,
      label: 'React & React Native',
      desc: 'Framework'
    },
    {
      imgSrc: TailwindIcon,
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: WebSocketIcon,
      label: 'WebSocket',
      desc: 'Real-time update'
    },
  ];
  return (
    <div className='container skills'>
      <Title subTitle="my skills" title="Essential Tools I use"/>
      <section className='section'>
        <div className='innerContainer'>

          <div className='cards'>
            {
              skillItem.map(item => (
                <motion.div initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1, ease: "easeInOut"}}>
                  <SkillCard {...item}/>
                </motion.div>
              ))
            }
          </div>
        </div>
      </section>
    </div>

  )
}

export default Skill