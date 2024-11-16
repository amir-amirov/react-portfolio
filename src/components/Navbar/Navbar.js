import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false)

    const [mobileMenu, setMobileMenu] = useState(false)
  
    const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

    const handleClickLinkedIn = () => {
        window.open('https://www.linkedin.com/in/amir-amirov-6b2527338/', '_blank');
    };

    const handleClickGitHub = () => {
        window.open('https://github.com/amir-amirov', '_blank');
    };

    const handleClickTelegram = () => {
        window.open('https://web.telegram.org/k/#@Qweasdzxcmir', '_blank');
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 400 ? setSticky(true) : setSticky(false)
        })
    }, [])

    return (
        <nav className={`container ${sticky ? "glass" : ""}`}>
            <span>
                <span className='charColor'>&lt;</span>
                Amir
                <span className='charColor'>/</span>
                Amirov
                <span className='charColor'>&gt;</span>
            </span>

            <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                <li><Link onClick={toggleMenu} to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link onClick={toggleMenu} to="skills" smooth={true} offset={0} duration={500}>Skills</Link></li>
                <li><Link onClick={toggleMenu} to="project" smooth={true} offset={-70} duration={500}>Projects</Link></li>
                <li><Link onClick={toggleMenu} to="contact" smooth={true} offset={0} duration={500}>Contact</Link></li>
            </ul>
            <div className="socialContainer">
                <div className='socials' onClick={handleClickLinkedIn}><FaLinkedin /></div>
                <div className='socials' onClick={handleClickGitHub}><FaGithub /></div>
                <div className='socials' onClick={handleClickTelegram}><FaTelegram /></div>
            </div>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
        </nav>
    )
}

export default Navbar