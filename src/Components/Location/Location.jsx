import React from 'react'
import "./Location.css"
export default function Location() {
    return (
        <>
            <div className='location_sec bg_location padding_sec_location'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <h4 className='card_title'>LOCATION</h4>
                                <p className='card_subtitle lead'>2215 John Daniel Drive <br />
                                    Clark, MO 65243</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <h4 className='card_title'>AROUND THE WEB
                                </h4>
                                <div className='d-flex   justify-content-center'>
                                    <div className='icon_container mx-1' >  <i className="fa-brands fa-facebook-f"></i> </div> 
                                    <div className='icon_container mx-1' >  <i className="fa-brands fa-twitter"></i> </div> 
                                    <div className='icon_container mx-1' >  <i className="fa-brands fa-linkedin-in"></i> </div> 
                                    <div className='icon_container mx-1' >  <i className="fa-brands fa-dribbble"></i> </div> 
                                </div>
                            </div>
                        </div>





                        <div className="col-md-4">
                            <div className="card">
                                <h4 className='card_title'>ABOUT FREELANCER
                                </h4>
                                <p className='card_subtitle lead'>Freelance is a free to use, MIT  <br /> licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
