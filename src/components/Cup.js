import React from 'react'
import './Cup.css'

const Cup = ({color, animation}) => {
    return (
    <React.Fragment>
    <g id="background">
        <path fill={color} className={`${animation ? "animation-cup" : ""}`} opacity="0.52" d="M19.5,50c1.4-7.1,4.4-13.9,8.8-19.7c2.9-3.8,6.3-7.2,10.2-10.1c8.2-5.9,17.9-9.1,28.1-9.1
            c10.3,0,20,3.2,28.2,9.2c3.9,2.8,7.3,6.2,10.2,10.1c4.4,5.9,7.3,12.6,8.7,19.7L19.5,50z"/>
        <path fill={color} opacity="0.52" d="M41.4,182.9c-4,0-7.6-2.2-9.6-5.7c-0.7-1.2-1.1-2.6-1.3-4l-12-108.6l-7.6,0c-2.8,0-5.1-2.3-5.1-5.1
            c0-0.2,0-0.4,0-0.6c0.3-2.6,2.5-4.5,5.1-4.5H14l105.1,0.2h3.1c2.8,0,5.1,2.3,5.1,5.1c0,0.2,0,0.4,0,0.6c-0.3,2.6-2.5,4.5-5,4.5
            h-7.6l-12.4,108.6c-0.2,1.9-1,3.8-2.1,5.3c-2.1,2.8-5.3,4.4-8.7,4.4L41.4,182.9z"/>
    </g>
    <g id="border">
        <path fill="none" className={`${animation ? "animation-cup" : ""}`} stroke={color} strokeWidth="2.1561" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
        M119.2,49.7L14,49.5c0.9-10.2,4.7-19.6,10.5-27.4c3.2-4.2,7-7.9,11.2-11.1c8.7-6.3,19.4-10,30.9-10c11.5,0,22.2,3.8,30.9,10.1
        c4.3,3.1,8,6.9,11.2,11.1C114.6,30.1,118.3,39.5,119.2,49.7z"/>

        <path fill="none" stroke={color} strokeWidth="2.1561" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
        M132.1,59.6c0,0.4,0,0.8-0.1,1.2c-0.6,4.9-4.8,8.7-9.8,8.7h-3.4l-11.9,104.4c-0.3,2.9-1.4,5.5-3,7.6c-2.9,3.9-7.5,6.3-12.6,6.3
        l-50-0.1c-5.9,0-11.1-3.3-13.7-8.2c-1-1.8-1.6-3.7-1.8-5.8L14.3,69.3l-3.4,0c-5.4,0-9.8-4.4-9.8-9.9c0-0.4,0-0.8,0.1-1.2
        c0.6-4.9,4.7-8.7,9.8-8.7H14l105.2,0.2h3.1C127.7,49.7,132.1,54.2,132.1,59.6z"/>

        <path fill="none" className={`${animation ? "animation-cup" : ""}`} stroke={color} strokeWidth="2.1561" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
        M73.5,1.6c4.4,0.6,6.7,1.7,6.7,3.1c0,2-6.1,3.5-13.5,3.5c-7.5,0-13.5-1.6-13.5-3.6c0-1.6,3.6-2.9,9.2-3.3"/>
    </g>
    </React.Fragment>
)}

export default Cup