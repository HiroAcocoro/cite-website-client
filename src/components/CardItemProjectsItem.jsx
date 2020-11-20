import React from 'react'
import { Link } from 'react-router-dom'


function CardItemProjects(props) {
    return (
        <>
            <li className="projects__cards__item">
                <Link className="projects__cards__item__link" to={props.path}>
                    <figure className="projects__cards__item__pic-wrap">
                        <img src={props.src} alt="cardImg01" className="projects__cards__item__img" />
                    </figure>
                    <div className="projects__cards__item__info">
                        <h5 className="projects__cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItemProjects
