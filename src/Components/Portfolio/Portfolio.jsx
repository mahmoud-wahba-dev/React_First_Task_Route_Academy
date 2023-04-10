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


  let showModal = (e) => {
    console.log("show modal click");
    let parentElement = e.target.parentElement.parentElement
    let imgTag = parentElement.querySelector("img")
    console.log(imgTag.src);

  }


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
            <Card imgss={img1}  modalTitle = {"title for card1"} />
            <Card imgss={img2}    modalTitle = {"title for card2"}  />
            <Card imgss={img3} />
            <Card imgss={img4} />
            <Card imgss={img5} />
            <Card imgss={img6} />



          </div>












        </div>

      </div>

    </>
  )
}
