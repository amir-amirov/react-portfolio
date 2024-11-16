import React, { useState } from 'react'
import "./ProjectCard.css"
import { motion } from 'framer-motion'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

const ProjectCard = ({ imgSrc, techStack, label, desc, codeUrl, secondButtonTitle, secondUrl }) => {

    const [st, setSt] = useState(false)

    const handleClickFirst = (url) => {
        window.open(url, '_blank');
        console.log(secondUrl)
    };

    const handleClickSecond = (url) => {

        if (secondButtonTitle === "Watch Demo") {
            setSt(true)
        } else {
            window.open(url, '_blank');
        }
    };

    return (
        <div className='project-card'>

            <div className='project-image'>
                <img src={imgSrc} alt="project1" />
            </div>
            <div className='project-tags'>
                {
                    techStack.map(item => (
                        <div className='project-tag'>
                            <p>{item}</p>
                        </div>
                    ))
                }
            </div>
            <div className='project-info'>
                <h2>{label}</h2>
                <p>{desc}</p>
            </div>
            <div className='project-btns'>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='btn' onClick={() => handleClickFirst(codeUrl)}>Code</motion.button>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className='btn' onClick={() => handleClickSecond(secondUrl)}>{secondButtonTitle}</motion.button>
            </div>
            <VideoPlayer st={st} setSt={setSt} secondUrl={secondUrl} />
        </div>
    )
}

export default ProjectCard