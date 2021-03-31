import React from 'react'

export default function StudentCard(props) {
    return (
        <div className='card'>
            <img src={props.src} className="student-card-img" />
        </div>
    )
}
