import React from 'react'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
  console.log(feedback)
    //sum of ratings 
    //divided by total ratings
    const ratingSum = feedback.reduce((acc,cur) => {
        return acc + cur.rating
    }, 0)
    console.log(ratingSum)
    const ratingAverage =  ratingSum / feedback.length
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(Math.round(ratingAverage)) ? 0 : Math.round(ratingAverage)}</h4>
    </div>
  )
}

export default FeedbackStats