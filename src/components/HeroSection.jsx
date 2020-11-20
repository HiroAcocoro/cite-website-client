import { React, useEffect }  from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


function HeroSection() {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className='hero-container'>
            <video src="/videos/video02.webm" autoPlay loop muted />
            <div data-aos="fade-right" className="info-container">
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
