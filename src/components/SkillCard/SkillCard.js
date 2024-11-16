import React from 'react'
import "./SkillCard.css"
import { motion } from 'framer-motion'

const SkillCard = ({
    imgSrc,
    label,
    desc,
}) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className='card'>
        <div className='card-img'>
            <img src={imgSrc} alt='icon' className='img'/>
        </div>
        <div className='card-text'>
            <h2 className='text-label'>{label}</h2>
            <p className='text-desc'>{desc}</p>
        </div>
    </motion.div>
  )
}

export default SkillCard