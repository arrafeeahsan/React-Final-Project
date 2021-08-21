import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './NavbarD.css'
import { Button } from './Button'
import { useHistory } from 'react-router-dom'


function NavbarD() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    const history = useHistory();

    function logout() {

        localStorage.clear();

        history.push('/')

    }

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    MF <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link 
                            to='/client-list' 
                            className="nav-links" 
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to='/client-add' 
                            className="nav-links" 
                            onClick={closeMobileMenu}
                        >
                            Add Client
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to='/search' 
                            className="nav-links" 
                            onClick={closeMobileMenu}
                        >
                            Search
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link 
                            to='/' 
                            className="nav-links" 
                            onClick={logout}
                        >
                            Logout
                        </Link>
                    </li>

                </ul>
                
                
            </div>
        </nav>
        </>
    )
}

export default NavbarD
