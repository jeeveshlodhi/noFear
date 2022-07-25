
import React from 'react'
import { FaRegBell, FaVideo } from 'react-icons/fa'
import { FiMessageSquare, FiSettings } from 'react-icons/fi'
import "./Header.css"
import thumbnail from '../../assets/profile.jpg'
const Header = () => {
  return (
    <div className='headerWrapper'>
        <div className='leftHeader'>
            <input type="text" name="search" placeholder='Search' id="searchBar" className='searchBar' />
            <div className='addVideo'><FaVideo/><p>Add Video</p></div>
        </div>
        <div className='rightHeader'>
            <span><FaRegBell/></span>
            <span><FiMessageSquare/></span>
            <span><FiSettings/></span>
            <div className='thumbnail'>
                <img src={thumbnail} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header