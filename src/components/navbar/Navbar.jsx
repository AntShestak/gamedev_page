import React from 'react';
import './navbar.css'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function Navbar() {
    return (
        <div className='md__navbar'>
            <div className='md__navbar-logo'>
                <h1>Antons Sestaks</h1>
                <h4>Game Development</h4>
            </div>
            <div className='md__navbar-icons'>
                <a href="https://www.linkedin.com/in/antgamedev/" target="_blank" rel="noreferrer">
                    <div className='md__navbar-icons_changeColor'>
                        <AiFillLinkedin  size='2em'/>
                    </div>
                    
                </a>
                <a href="https://github.com/AntShestak" target="_blank" rel="noreferrer">
                    <div className='md__navbar-icons_changeColor'>
                        <AiFillGithub  size='2em'/>
                    </div>
                    
                </a>
            </div>
            
        </div>
    )
}

export default Navbar;
