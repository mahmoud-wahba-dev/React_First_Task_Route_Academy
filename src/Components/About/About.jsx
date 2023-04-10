import React from 'react'
import "./About.css"
export default function About() {
  return (
    <>
      <div className='bg_green padding_sec_about text-center text-white'>
        <div className="container">
          <h1>
            ABOUT
          </h1>
          <div className='d-flex justify-content-center align-items-center'>

            <div className='divider'> </div>

            <div><i className="fa-solid fa-star p-3 icon"></i></div>

            <div className='divider'> </div>

          </div>
          <div className='d-flex justify-content-evenly text-start py-4 '>
            <p className='w-25 '>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
            <p className='w-25'>
              You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
