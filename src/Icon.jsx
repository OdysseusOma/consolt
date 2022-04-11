import React from 'react'
import IMG from './illust.png'
import './icon.css'

const Icon = () => {
  return (
    <>
        <div className="arrange">
            <div className="img"><img src={IMG} alt="" /></div>

            <div className="circles">
                <div className="orangeEllipse"></div>
            </div>
            <div className="ellipseGroup">
                <div className="ellipse1"></div>
                <div className="ellipse2"></div>
                <div className="ellipse3"></div>
            </div>  
        </div>



        <div className="vectors">
            <div className="chatVector">
              <svg className='svgDesign' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15H15V19L11 15H7C6.73733 15.0003 6.47719 14.9486 6.23453 14.8481C5.99187 14.7475 5.77148 14.6 5.586 14.414L15 5ZM5.586 14.414L9 11H13C13.5304 11 14.0391 10.7893 14.4142 10.4142C14.7893 10.0391 15 9.53043 15 9V3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V9C1 9.53043 1.21071 10.0391 1.58579 10.4142C1.96086 10.7893 2.46957 11 3 11H5V15L5.586 14.414Z" stroke="#FDF7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="chatCart">
              <svg className='svgDesign' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H3L3.4 3L1 1ZM5 11H15L19 3H3.4L5 11ZM5 11L3.4 3L5 11ZM5 11L2.707 13.293C2.077 13.923 2.523 15 3.414 15H15L5 11ZM15 15C14.4696 15 13.9609 15.2107 13.5858 15.5858C13.2107 15.9609 13 16.4696 13 17C13 17.5304 13.2107 18.0391 13.5858 18.4142C13.9609 18.7893 14.4696 19 15 19C15.5304 19 16.0391 18.7893 16.4142 18.4142C16.7893 18.0391 17 17.5304 17 17C17 16.4696 16.7893 15.9609 16.4142 15.5858C16.0391 15.2107 15.5304 15 15 15ZM7 17C7 17.5304 6.78929 18.0391 6.41421 18.4142C6.03914 18.7893 5.53043 19 5 19C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17C3 16.4696 3.21071 15.9609 3.58579 15.5858C3.96086 15.2107 4.46957 15 5 15C5.53043 15 6.03914 15.2107 6.41421 15.5858C6.78929 15.9609 7 16.4696 7 17V17Z" stroke="#FFF8F8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className="chatInfo">
            <svg className='svgDesign' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 6H10.5104M11.5417 14H10.5V10H9.45833L11.5417 14ZM19.875 10C19.875 11.1819 19.6325 12.3522 19.1614 13.4442C18.6902 14.5361 17.9997 15.5282 17.1291 16.364C16.2586 17.1997 15.2251 17.8626 14.0877 18.3149C12.9502 18.7672 11.7311 19 10.5 19C9.26886 19 8.04977 18.7672 6.91234 18.3149C5.77492 17.8626 4.74142 17.1997 3.87087 16.364C3.00032 15.5282 2.30977 14.5361 1.83863 13.4442C1.36749 12.3522 1.125 11.1819 1.125 10C1.125 7.61305 2.11272 5.32387 3.87087 3.63604C5.62903 1.94821 8.0136 1 10.5 1C12.9864 1 15.371 1.94821 17.1291 3.63604C18.8873 5.32387 19.875 7.61305 19.875 10Z" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
        </div>
    </>
  )
}

export default Icon