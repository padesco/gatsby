import * as React from 'react'
import {card, cardTitle} from './card.module.css'

const Card = ({ service, image, first, second, third }) => {
    return (
        <div className={card}>
            <img src={image} alt="illustration" />
            <div className={cardTitle}><h3>{service}</h3></div>
            <ul>
                <li>{first}</li>
                <li>{second}</li>
                <li>{third}</li>
            </ul>
        </div>
    )
}

export default Card