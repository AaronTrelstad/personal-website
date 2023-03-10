import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__skills">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Familiar</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__courses">
          <h3>Courses</h3>
          <div>
            <article className="experience__details">
              <div>
              <h4>Computer Science</h4>
              <small className='text-light'>Intro to Computer Science, Object Oriented Design</small>
              </div>
            </article>
            <article className="experience__details">
              <div><h4>Math</h4>
              <small className='text-light'>Calculus (1, 2, 3), Differential Equations, Linear Algebra</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
              <h4>Economics</h4>
              <small className='text-light'>Intro to Macro, Intro to Micro</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
              <h4>Stats</h4>
              <small className='text-light'>Intro to Statistics</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience