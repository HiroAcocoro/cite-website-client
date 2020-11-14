import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Latest Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/img-9.jpg" text="Uncompromisingly good presentation software. Purpose-built for teams." label="Web Application" path="/"/>
                        <CardItem src="images/img-2.jpg" text="ToDo List Planner, Reminder & Calendar" label="Mobile Application" path="/"/>
                        <CardItem src="images/img-3.png" text="Provide reliable realty brokerage and make meaningful contributions to nation-building." label="Web Application" path="/"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
