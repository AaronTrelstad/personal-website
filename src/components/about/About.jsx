import React from 'react'
import './about.css'
import {FaUserGraduate} from 'react-icons/fa'
import {BsPersonWorkspace} from 'react-icons/bs'
import {FaRunning} from 'react-icons/fa'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About"/>
          </div>
        </div>

        <div className="aboout__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>Education</h5>
              <small>Iowa State <br/>Class of 2027<br/>BS Computer Science<br/>BS Applied Mathematics</small>
            </article>
            <article className='about__card'>
              <BsPersonWorkspace className='about__icon'/>
              <h5>Career Interests</h5>
              <small>Quant SWE<br/>AI/ML SWE<br/>Data Science</small>
            </article>
            <article className='about__card'>
              <FaRunning className='about__icon'/>
              <h5>Personal Interests</h5>
              <small>Sports<br/>Weight Lifting<br/>Traveling</small>
            </article>
          </div>
          <p>
            I am an incoming freshman at Iowa State University, I am from LeClaire, Iowa. 
            In high school I played basketball and I remain a very active person. 
            I have always loved to solve problems and think of innovative ideas to fix real world problems.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About