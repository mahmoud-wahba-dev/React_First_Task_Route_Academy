import React from 'react'
import "./Contact.css"
export default function Contact() {
  return (
    <>
      <div className='contact padding_sec_about text-center'>
        <div className="container">
          <h1>
            CONTACT ME
          </h1>
          <div className='d-flex justify-content-center align-items-center mb-3'>

            <div className='divider'> </div>

            <div><i className="fa-solid fa-star p-3 icon star_icon"></i></div>

            <div className='divider'> </div>

          </div>
          <div className="form_container col-md-8 m-auto">
            <form >

              <div className="form-floating">
                <input type="text" className="form-control" id="floatingText" placeholder="Name" />
                <label htmlFor="floatingText">Name</label>
              </div>

              <div className="form-floating my-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating my-3">
                <input type="text" className="form-control" id="floatingPhone" placeholder="Phone Number" />
                <label htmlFor="floatingPhone">Phone</label>
              </div>


              <div className="form-floating my-3">
                <textarea className="form-control" placeholder="Message" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Message</label>
              </div>

              <div className='text-start'>
                <button type='button' className='btn btn-primary px-4 btn-lg btn_send'>Send</button>
              </div>

            </form>


          </div>
        </div>

      </div>

    </>
  )
}
