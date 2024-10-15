// import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'





const Navbar = ({setSidebar}) => {
  
  return (
    <nav className='flex-div' >
      <div className="nav-left flex-div">
        <img className='menu-icon'
        onClick={()=> setSidebar(prev=>!prev)}
        src={menu_icon} alt="Menu" />
        <Link to='/' aria-label='Home'>
        <img className='logo' src={logo} alt="YouTube Logo" />
        </Link>
      </div>

      <div className="nav-middle">
        <div className="search-box flex-div">
        <input type="text"
        placeholder='Search'
        aria-label='Search'
        />
        <img src={search_icon} alt="Search Icon" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload Icon" />
        <img src={more_icon} alt="More Icon" />
        <button className='notification-btn'>
        <img src={notification_icon} alt="Notifications Icon" />
        <span className='badge'>3</span>
        </button>
        <img className='user-icon' src={profile_icon} alt="User Profile" />
      </div>
    </nav>
  )
}

export default Navbar
