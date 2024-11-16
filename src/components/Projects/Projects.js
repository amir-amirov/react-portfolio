import React from 'react'
import "./Projects.css"
import Title from '../Title/Title'
import project_1 from '../../assets/images/project-1.png'
import project_2 from '../../assets/images/project-2.png'
import project_3 from '../../assets/images/project-3.png'
import project_4 from '../../assets/images/project-4.png'
import project_5 from '../../assets/images/project-5.png'
import project_6 from '../../assets/images/project-6.png'
import ProjectCard from '../ProjectCard/ProjectCard'
import { motion } from 'framer-motion'

const projectItem = [
  {
    imgSrc: project_1,
    techStack: [  "React", 
      "React Router DOM", 
      "Context API", 
      "Firebase",
      "Real-time messaging",                
      "Authentication",                  
      "Image uploading",                                       
    ],
    label: 'Chat Web Application',
    desc: 'A chat application lets users send messages, share media, and stay connected.',
    codeUrl: "https://github.com/amir-amirov/full-stack-chatapp",
    secondButtonTitle: "Go to Website",
    secondUrl: "https://jaiyq-chatapp.vercel.app",
  },
  {
    imgSrc: project_2,
    techStack: [  "React", 
      "React scroll", 
      "Web3Form API", 
      "Flexbox",
      "Video Integration",                
      "Responsive Layout",                  
      "React Hooks",                                         
    ],
    label: 'School website',
    desc: 'A school website offers resources, updates, and tools for students and staff.',
    codeUrl: "https://github.com/amir-amirov/react-jaiyq-school",
    secondButtonTitle: "Go to Website",
    secondUrl: "https://jaiyq-school.vercel.app",
  },
  {
    imgSrc: project_3,
    techStack: [ 
      "CoinGecko API", 
      "React Google Charts", 
      "React Router DOM",
      "Context API",                
      "Axios / Fetch",                  
      "CSS Grid",                      
      "Flexbox",                                   
    ],
    label: 'Cryptocurrency Tracker',
    desc: 'A cryptocurrency tracker website provides real-time prices and market data.',
    codeUrl: "https://github.com/amir-amirov/react-crypto-jaiyq",
    secondButtonTitle: "Go to Website",
    secondUrl: "https://crypto-jaiyq.vercel.app",
  },
  {
    imgSrc: project_4,
    techStack: [  "React Native", 
      "React Navigation",  
      "Redux & Persist",
      "Node.js",                      
      "Express.js",                  
      "MongoDB",
      "WebSocket",
      "Lottie animation"                     
    ],
    label: 'Food App',
    desc: 'A mobile food app lets users order meals, browse menus, and track deliveries.',
    codeUrl: "https://github.com/amir-amirov/fullstack-mern-foodapp",
    secondButtonTitle: "Watch Demo",
    secondUrl: "/video/demo_foodapp.mp4",
  },
  {
    imgSrc: project_5,
    techStack: [  "React Native", 
      "TypeScript",
      "Axios",
      "community/Voice",
      "React Navigation",                                  
      "OpenAI API",                      
      "chatgpt 4o mini",                  
      "dalle3",                     
    ],
    label: 'AI Voice Assistant',
    desc: 'A mobile app AI voice assistant helps users perform tasks using voice commands',
    codeUrl: "https://github.com/amir-amirov/ai-voice-assistant",
    secondButtonTitle: "Watch Demo",
    secondUrl: "/video/demo_voice_assistant.mp4",
  },
  {
    imgSrc: project_6,
    techStack: [  "React Native CLI", 
      "TypeScript", 
      "Firebase", 
      "Redux",
      "React Navigation",                
      "Fetch API",                  
      "Crop Picker",                      
      "Vector Icons",                  
      "Auth",                     
    ],
    label: 'Mobile Chat App',
    desc: 'A mobile chat app allows users to message, share media, and stay connected. ',
    codeUrl: "https://github.com/amir-amirov/full-stack-react-native-chatapp",
    secondButtonTitle: "Watch Demo",
    secondUrl: "/video/demo_chatapp.mp4",
  },
]

const Projects = () => {

  return (
    <div className='container project'>
      <Title subTitle="my projects" title="Web and Mobile Apps I Built"/>
      <div className='projects'>
        {
          projectItem.map(item => (
            <motion.div initial={{y: 200, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1}}>
              <ProjectCard {...item}/>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects