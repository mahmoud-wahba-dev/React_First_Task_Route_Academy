import React, { useEffect } from 'react'
import "./Portfolio.css"
import img1 from "../../imgs/portfolio/cabin.png"
import img2 from "../../imgs/portfolio/cake2.png"
import img3 from "../../imgs/portfolio/circus3.png"
import img4 from "../../imgs/portfolio/game4.png"
import img5 from "../../imgs/portfolio/safe5.png"
import img6 from "../../imgs/portfolio/submarine6.png"
import Modal from '../Modal/Modal';
import Card from '../Card/Card';
export default function Portfolio() {


 

  return (
    <>
      <div className='portfolio padding_sec_about text-center'>
        <div className="container">
          <h1>

            PORTFOLIO
          </h1>
          <div className='d-flex justify-content-center align-items-center mb-3'>

            <div className='divider'> </div>

            <div><i className="fa-solid fa-star p-3 icon star_icon"></i></div>

            <div className='divider'> </div>

          </div>
          <div className="row gy-5 gx-0 gx-sm-5">
            <Card img={img1} modalTitle={"title for card1"} />
            <Card img={img2} modalTitle={"title for card2"} />
            <Card img={img3} modalTitle={"title for card3"} />
            <Card img={img4} modalTitle={"title for card4"} />
            <Card img={img5} modalTitle={"title for card5"} />
            <Card img={img6} modalTitle={"title for card6"} />



          </div>












        </div>

      </div>

    </>
  )
}
