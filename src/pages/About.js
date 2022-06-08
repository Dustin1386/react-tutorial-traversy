import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function About() {
  return (
    <div className='about'>
          <div>About</div>
          <p>
            <Link to='/'>
            <FaQuestion size={30}/>
            </Link>
          </p>


    </div>
  )
}

export default About