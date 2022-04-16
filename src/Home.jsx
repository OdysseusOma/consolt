import React, { useState } from 'react'
import './home.css'

function Home() {
  // const [showForm, setShowForm] = useState(false)
  // const show = () => setShowForm(!showForm)
  
  return (

    <div className="container">
      <div className="circles">
        <div className="yellowEllipse"></div>
      </div>
      <div className="textarea">
          <div className="textAreaContainer">
            <div className="mainText">EASE OF HEALTHCARE</div>
            <div className="smallText">We’re a company leveraging on existing technologies to provide easy-to-use and easy-to-access services. We’re building a health community online, we’ll like you to join us today.</div>
            <div className="ctaArea">
              <form className='userForm' action="https://formsubmit.co/adebayoomirin@gmail.com" method="POST">
                <input type="email" name='email' placeholder='Your Email' required />
                <input type="hidden" name="_autoresponse" value="your custom message"></input>
                <button type="submit" className='formBtn'>Subscribe</button>
              </form>
            </div>
          </div>
      </div>
                
      <div className="circles">
        <div className="blueEllipse"></div>
      </div>
                {/* <div className="cta">Join us today!</div>
                
                 this is not necessary
                <div className="click">
                  <button id='stateBtn' onClick={show}>
                    <svg width="104" height="106" viewBox="0 0 104 106" fill="none" xmlns="http://www.w3.org/2000/svg" className='btnSvg'>
                      <ellipse cx="51.5" cy="53" rx="35.5" ry="38" fill="#092520"/>
                      <path d="M104 53C104 82.2711 80.7188 106 52 106C23.2812 106 0 82.2711 0 53C0 23.7289 23.2812 0 52 0C80.7188 0 104 23.7289 104 53Z" fill="#7AC8F2"/>
                      <ellipse cx="52" cy="53" rx="42" ry="45" fill="#63B8A7"/>
                      <path d="M82 53C82 69.5685 68.5685 83 52 83C35.4315 83 22 69.5685 22 53C22 36.4315 35.4315 23 52 23C68.5685 23 82 36.4315 82 53Z" fill="#000037"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M58.707 53.293C58.8945 53.4805 58.9998 53.7348 58.9998 54C58.9998 54.2652 58.8945 54.5195 58.707 54.707L52.707 60.707C52.5195 60.8945 52.2652 60.9998 52 60.9998C51.7349 60.9998 51.4805 60.8945 51.293 60.707L45.293 54.707C45.1975 54.6148 45.1213 54.5044 45.0689 54.3824C45.0165 54.2604 44.9889 54.1292 44.9878 53.9964C44.9866 53.8636 45.0119 53.7319 45.0622 53.609C45.1125 53.4861 45.1867 53.3745 45.2806 53.2806C45.3745 53.1867 45.4862 53.1125 45.6091 53.0622C45.732 53.0119 45.8636 52.9866 45.9964 52.9877C46.1292 52.9889 46.2604 53.0165 46.3824 53.0689C46.5044 53.1213 46.6148 53.1975 46.707 53.293L51 57.586V46C51 45.7348 51.1054 45.4804 51.2929 45.2929C51.4804 45.1054 51.7348 45 52 45C52.2652 45 52.5196 45.1054 52.7071 45.2929C52.8947 45.4804 53 45.7348 53 46V57.586L57.293 53.293C57.4805 53.1055 57.7349 53.0002 58 53.0002C58.2652 53.0002 58.5195 53.1055 58.707 53.293Z" fill="#FBEDED"/>
                    </svg>
                    <span className='regDesc'>Join our Waitlist</span>
                  </button>
         
                  {showForm && (
                    <form className='userForm' action="https://formsubmit.co/adebayoomirin@gmail.com">
                      <input type="email" name='email' placeholder='Your Email' required />
                      <input type="text" name='name' placeholder='Your Full Name' required />
                      <button type="submit" className='formBtn'>Join Waitlist</button>
                    </form>
                  )}
                </div> */}       
    </div>
    
  )
}

export default Home