import React from 'react'
import './portfolio.css'
import {BsCheck2Circle} from 'react-icons/bs'

const Portfolio = () => {
  return (
    <section id='services'>
      <h2>Experiences and Projects</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Internships</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2Circle className='service__list-icon' />
              <p>Still working on it</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Finance Related Projects</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BsCheck2Circle className='service__list-icon' />
              <p>Trading Algorithm that tweets Buy/Sell signal</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon' />
              <p>Linear Regression on Google stock price</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon' />
              <p>Statistic analysis of DE stock price and CORN price</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Development Related Projects</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BsCheck2Circle className='service__list-icon' />
              <p>Tetris Game</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon' />
              <p>Personal Website</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon' />
              <p>Maze Solver (BFS and DFS)</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Portfolio