import { useState } from 'react';
export default function Card({ img, modalTitle }) {
    let [modalImg, setModalImg] = useState()

    let changeImg = (img) => {
        console.log("click");
        console.log(img, "img");
        setModalImg(img)
        console.log(modalImg, "use state modal img");
    }

    return (
        <>
            <div className="col-md-4">
                <div data-bs-toggle="modal" data-bs-target="#exampleModal" className="card">
                    <div className='rounded-3'>
                        <img className='img-fluid img_portfolio rounded-4' src={img} alt="" />
                        <div onClick={() => changeImg(img)} className='layer rounded-4'>
                            <i className='fa fa-plus fa-bold fa-5x'></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"> {modalTitle} </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={modalImg} className='img-fluid img_portfolio rounded-4'  alt="" />

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}