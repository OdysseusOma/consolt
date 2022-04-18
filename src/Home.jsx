import React, { useState } from 'react'
import './home.css'
import NewsletterSubscribe from './NewsletterSubscribe'


function Home() {
  
  return (

    <div className="container">
      <div className="textarea">
          <div className="textAreaContainer">
            <div className="mainText">EASE OF HEALTHCARE</div>
            <div className="smallText">We’re a company leveraging on existing technologies to provide easy-to-use and easy-to-access services. We’re building a health community online, we’ll like you to join us today.</div>
            <NewsletterSubscribe />
          </div>
      </div>
                
      <div className="circles">
        <div className="yellowEllipse"></div>
      </div>
      <div className="circles">
        <div className="blueEllipse"></div>
      </div>
                
    </div>
    
  )
}

export default Home