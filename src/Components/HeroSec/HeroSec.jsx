import React from 'react'
import "./HeroSec.css"
import heroImg from "../../imgs/hero-sec/avataaars.svg"
// public/imgs/hero-sec/avataaars.svg
export default function HeroSec() {
    return (
        <>
            <div className='bg_green hero_sec'>

        
                <div className="container py-4 text-center text-white">
        
        
                    <div className="mb-4 mt-4 py-3 ">
                        <img width={250} className='' src={heroImg} alt="child pic" />
                    </div>
                    <h1>
                        START REACT
                    </h1>
                    <div className='d-flex justify-content-center align-items-center'>

                        <div className='divider'> </div>

                        <div><i className="fa-solid fa-star p-3 icon"></i></div>

                        <div className='divider'> </div>

                    </div>
                    <p className='pb-5'>
                        Graphic Artist - Web Designer - Illustrator
                    </p>
                </div>
            </div>
        </>
    )
}
