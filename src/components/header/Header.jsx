import React from 'react'
import './header.css'
import RES from './Res'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aaron Trelstad</h1>
        <h5 className="text-light">Student</h5>
        <RES />
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header