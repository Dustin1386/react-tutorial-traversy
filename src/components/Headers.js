import React, { useState } from 'react'

function Headers() {
    const [headerText, setHeader] = useState('this is the default')
    console.log({headerText})
    const changeHeader = () => {
      setHeader('bob')
  }
  return (
      <header>
        <button onClick={changeHeader}>Change</button>
   <h1>{headerText} </h1>
      </header>
    
  )
}

export default Headers