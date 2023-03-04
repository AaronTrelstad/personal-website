import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/aarontrelstad" target="_blank"><AiFillLinkedin /></a>
        <a href="https://github.com/AaronTrelstad" target="_blank"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials