import React from 'react'
import Home from './Home'
import Icon from './Icon'
import './MainBody.css'


const MainBody = () => {
  return (
    <div className='mainBody'>
        <div className="homer"><Home /></div>
        <div className="iconer"><Icon /></div>
    </div>
  )
}

export default MainBody