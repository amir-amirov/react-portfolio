import React from 'react'
import "./Hero.css"
import avatar from '../../assets/hero-img.png'
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';

const Hero = () => {

    return (
        <div className='hero container'>
            <motion.div className='hero-description'>
                <motion.h1 initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='name'>AMIR AMIROV</motion.h1>
                <motion.h2 initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className='position'>Hi! I am <span> <Typewriter
                    options={{
                        strings: ['Fullstack Developer', 'Web Developer', 'Mobile Developer'],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: 'role'
                    }}
                /></span></motion.h2>
                <motion.p initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className='hero-about'>Dedicated to developing modern React web apps and React Native solutions for iOS and Android platforms, tailored to meet your business needs.</motion.p>
                <motion.a initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='btn' style={{ textDecoration: 'none' }} href="/amirov_cv.pdf"
                    download="amirov_cv.pdf">Resume</motion.a>
            </motion.div>
            <motion.div whileInView={{ x: [200, 0] }} transition={{ duration: 1 }} className='hero-avatar'>
                <img src={avatar} alt='avatar' />
            </motion.div>
        </div>
    )
}

export default Hero