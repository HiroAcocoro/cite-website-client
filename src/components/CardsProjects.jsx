import { React, useEffect } from 'react'
import './CardsProjects.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import CardItemProjects from './CardItemProjectsItem'

function CardsProjects() {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, [])

    return (
        <div className='projects__cards'>
            <h1>Mobile Applications</h1>
            <div className="projects__cards__wrapper">
                <ul className="projects__cards__items">
                    <div data-aos="fade-left" className="projects__cards__container">
                        <CardItemProjects src="images/img-9.jpg" text="Uncompromisingly good presentation software. Purpose-built for teams." path="/" />
                    </div>
                    <div data-aos="fade-right" className="projects__cards__container">
                        <CardItemProjects src="images/img-2.jpg" text="ToDo List Planner, Reminder & Calendar" path="/" />
                    </div>
                    <div data-aos="fade-left" className="projects__cards__container">
                        <CardItemProjects src="images/img-3.png" text="Provide reliable realty brokerage and make meaningful contributions to nation-building." path="/" />
                    </div>
                    <div data-aos="fade-right" className="projects__cards__container">
                        <CardItemProjects src="images/img-3.png" text="Provide reliable realty brokerage and make meaningful contributions to nation-building." path="/" />
                    </div>
                    <div data-aos="fade-left" className="projects__cards__container">
                        <CardItemProjects src="images/img-3.png" text="Provide reliable realty brokerage and make meaningful contributions to nation-building." path="/" />
                    </div>
                </ul>
            </div>

        </div>
    )
}

export default CardsProjects
