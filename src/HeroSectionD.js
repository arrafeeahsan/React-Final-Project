import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSectionD() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    return (
        <div className="hero-container">
            
            <h1>MODERN FARMING</h1>
            <p>Welcome to our website!</p>
            <div>
                <Link 
                to='/clients' 
                className="">Clients |
                </Link>
                <Link 
                    to='/accounts' 
                    className="">Account |
                </Link>
                <Link 
                    to='/forums' 
                    className="">Forum 
                </Link>
            </div>    
        </div>
        
    )
}

export default HeroSectionD
