import React from 'react'

function Headers(props) {
    const {text} = props
  return (
      <header>
          <div className='container'>
        <h2>{text}</h2>
    </div>
      </header>
    
  )
}

export default Headers