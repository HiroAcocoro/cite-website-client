import { React, useEffect } from 'react'
import '../App.css'
import './WebAppFeaturedSection.css'
import Aos from 'aos'
import { Button } from './Button';


function WebAppFeaturedSection() {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className="featured-container">
            <div data-aos="fade-right" className="featured-card-wrap">
                <div className="featured-card">
                    <div className="featured-card-img-wrap">
                        <img src="images/168Realty.png" className="featured-card-img" alt="168Land Realty Website" />
                    </div>
                </div>
            </div>
            <div className="featured-info-container">
                <h1>168 Land Realty</h1>
                <h5>Reliable partner in real estate investment and brokerage in the millennium.</h5>
                <div className="featured-demo-button">
                    <Button className="btn" buttonStyle='btn--outline--dark' buttonSize='btn--large'>Visit Demo</Button>
                </div>
            </div>
            {/* <Link > */}

            {/* </Link> */}
        </div>
    )

}

export default WebAppFeaturedSection