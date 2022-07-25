
import React from 'react'
import './Sidebar.css'
import { MdPersonOutline, MdOutlineFoodBank,MdDirectionsRun } from "react-icons/md"
import {IoMdVideocam, IoMdMusicalNote, IoMdSettings } from 'react-icons/io'
import  {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"
import { useState } from 'react'

const SideBar = () => {

    const [active, setActive] = useState('Video')

    return (
        <div className="sideBarWrapper">
            <div className='logo'>
                No Fear
            </div>
            <div className='sideMenuWrapper'>
                <div className='activeSide'><MdPersonOutline className='sideIcon '/><p>Trainer</p></div>
                <div><MdDirectionsRun  className='sideIcon' /><p>Trainings</p></div>
                <div><IoMdVideocam  className='sideIcon'/><p>Videos</p></div>
                <div><IoMdMusicalNote  className='sideIcon'/><p>Music</p></div>
                <div><MdOutlineFoodBank  className='sideIcon'/> <p>Food</p></div>
                <div><IoMdSettings  className='sideIcon'/> <p>Profile</p></div>
            </div>
            <div className='sideBarIcons'>
                <FaInstagram/>
                <FaFacebookF/>
                <FaTwitter/>
            </div>
        </div>
    )
}

export default SideBar