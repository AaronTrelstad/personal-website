import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Experience</h5>
      <div className="container experience__container">
        <div className="experience__skills">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>Python</h4>
              <small className='text-light'>Proficient</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>Familiar</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>CSS</h4>
              <small className='text-light'>Familiar</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>JavaScript</h4>
              <small className='text-light'>Familiar</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>MySQL</h4>
              <small className='text-light'>Familiar</small>
            </article>
          </div>
        </div>

        <div className="experience__courses">
          <h3>Courses</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>Computer Science</h4>
              <small className='text-light'>Intro to Computer Science, Object Oriented Design</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>Math</h4>
              <small className='text-light'>Calculus (1, 2, 3), Differential Equations, Linear Algebra</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>Economics</h4>
              <small className='text-light'>Intro to Macro, Intro to Micro</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4></h4>
              <small className='text-light'>Familiar</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>MySQL</h4>
              <small className='text-light'>Familiar</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience