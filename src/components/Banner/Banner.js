import * as React from 'react'
import {banner} from './banner.module.css'

const Banner = ({ image, text}) => {
    return (
        <div className={banner}>
            <img src={image} alt="forest" />
            <div></div>
            <h1>{text}</h1>
        </div>
    )
}

export default Banner