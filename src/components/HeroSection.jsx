import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.webm" autoPlay loop muted />
            <div className="info-container">
                <h1>Craftopia</h1>
                <p>Craftopia is the brand new multiplayer survival action game developed by CITE students.</p>
                <div className="info-btns">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Go to Project Page</Button>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH ? <i className='far fa-play-circle' /></Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
