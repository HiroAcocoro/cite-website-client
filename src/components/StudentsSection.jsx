import React from 'react'
import Carousel from 'react-elastic-carousel';
import StudentCard from './StudentCard';
import './StudentsSection.css';

export default function StudentsSection() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 50, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ]

    return (
        <>
            <div className="student-main-container">
                <div className="title-container">
                    <div className="main-title">
                        <h1>The Future Innovators</h1>
                    </div>
                </div>
                <div className="carousel-container">
                    <Carousel breakPoints={breakPoints}>
                        <StudentCard src="images/student1.jfif"/>
                        <StudentCard src="images/student2.jpg"/>
                        <StudentCard src="images/student3.jfif"/>
                        <StudentCard src="images/student4.jfif"/>
                        <StudentCard src="images/student5.jfif"/>
                        <StudentCard src="images/student6.jfif"/>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
