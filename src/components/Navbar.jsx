import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import { use100vh } from 'react-div-100vh'
import './Navbar.css';
import Dropdown from './Dropdown';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);
    const [logo, setLogo] = useState(false);
    const [navLink, setNavLink] = useState(false);
    const [navDropdown, setNavDropdown] = useState(false);
    const [navButton, setNavButton] = useState(false);
    const [navMenuButton, setNavMenuButton] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const vh = use100vh()


    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const changeNavbar = () => {
        if (window.scrollY >= vh) {
            setNavbar(true);
            setLogo(true);
            setNavLink(true);
            setNavDropdown(true);
            setNavButton(true);
            setNavMenuButton(true);
        } else {
            setNavbar(false);
            setLogo(false);
            setNavLink(false);
            setNavDropdown(false);
            setNavButton(false);
            setNavMenuButton(false);
        }
    };

    window.addEventListener('scroll', changeNavbar);

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <Link to="/" className={logo ? 'navbar-logo active' : 'navbar-logo'} onClick={closeMobileMenu}>
                        <img className="logo-img" src="images/logo04.png" alt="cite-logo" />CITE
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {navMenuButton ? 
                        <i className={click ? 'fas fa-times active' : 'fas fa-bars active'} />
                        : <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className={navLink ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <div className={navDropdown ? 'nav-drop active' : 'nav-drop'}>
                                Projects &nbsp;<i className='fas fa-caret-down' />
                            </div>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className='nav-item-mobile'>
                            <Link to='/web-applications-home' className="nav-drop-items" onClick={closeMobileMenu}>
                                Web Applications
                            </Link>
                        </li>
                        <li className='nav-item-mobile'>
                            <Link to='/mobile-applications-home' className="nav-drop-items" onClick={closeMobileMenu}>
                                Mobile Applications
                            </Link>
                        </li>
                        <li className='nav-item-mobile'>
                            <Link to='/' className="nav-drop-items" onClick={closeMobileMenu}>
                                Game Applications
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle={navButton ? 'btn--outline--dark' : 'btn--outline' } buttonLink="/contact">CONTACT US</Button>}
                    
                </div>
            </nav>
        </>
    )
}
