import React from 'react'

// Import Icon
import Facebook from "../assets/icons/facebook.svg"
import Instagram from "../assets/icons/instagram.svg"
import Github from "../assets/icons/github.svg"
import Pin from "../assets/icons/pin.svg"
import Tie from "../assets/icons/tie.svg"

import Mightycoder from "../assets/mighty-coder.svg"


const Sidebar = () => {

    const handleEmail = () => {
        window.open("mailto:snakeusa8@gmail.com")
    }

    return (
        <div className="sidebar">
            <img src={Mightycoder} alt="profile" className="sidebar-image" />
            <div className="sidebar-name">Saiful <span>Nakeusa</span></div>
            <div className="sidebar-item sidebar-identity">Web Developer</div>
            <a href="!#">
                <div className="sidebar-item">
                    <img src={Tie} alt="cv" className="sidebar-icon" /> Download CV
                </div>
            </a>
            <figure className="sidebar-social-icons">
                <a href="!#"> <img src={Facebook} alt="facebook" className="sidebar-icon" /> </a>
                <a href="!#"> <img src={Instagram} alt="instagram" className="sidebar-icon" /> </a>
            </figure>
            <div className="sidebar-contact">
                <div className="sidebar-item">
                    <a href="!#"><img src={Github} alt="github" className="sidebar-icon" /> Github  </a>
                </div>
                <div className="sidebar-location">
                    <img src={Pin} alt="location" className="sidebar-icon" />
                    Banda Aceh, Indonesia
                </div>
                <div className="sidebar-item">code.indo@gmail.com</div>
                <div className="sidebar-item">+62 455 5434 5435</div>
            </div>
            <div className="sidebar-item sidebar-email" onClick={handleEmail}>
                email me
            </div>
        </div>
    )
}

export default Sidebar
