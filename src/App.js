import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skill from './components/Skills/Skill'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Title from './components/Title/Title'
import Footer from './components/Footer/Footer'


const App = () => {
  
  return (
    <div>
      <div class="custom-background"></div>
      <Navbar />
      <Hero />
      <hr style={{ width: '100%', border: '1px solid gray' }} />
      <Skill />
      <Projects /> 
      <Title title="Get In Touch" subTitle="Contact me"/>
      <Contact />
      <Footer />
    </div>

  )
}

export default App