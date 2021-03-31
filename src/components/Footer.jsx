import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Footer stuff here blah blah blah
                </p>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/'>Link stuff 1</Link>
                        <Link to='/'>Link stuff 2</Link>
                        <Link to='/'>Link stuff 2</Link>
                        <Link to='/'>Link stuff 2</Link>
                        <Link to='/'>Link stuff 2</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Link stuff 1</Link>
                        <Link to='/'>Link stuff 2</Link>
                        <Link to='/'>Link stuff 2</Link>
                        <Link to='/'>Link stuff 2</Link>
                        <Link to='/'>Link stuff 2</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            <img className="social-logo-img" src="images/logo04.png" alt="cite-logo" />&nbsp; CITE
                        </Link>
                    </div>
                    <small className="website-rights">CITE SWU-PHINMA © 2020</small>
                    <div className="social-icons">
                        <Link to='/' className="social-icon-link facebook" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
