import React from 'react'

function FeedbackStats({item, feedback}) {
    //sum of ratings 
    //divided by total ratings
    const ratingSum = feedback.reduce((acc,cur) => {
        return acc + cur.rating
    }, 0)
    const ratingAverage =  ratingSum / feedback.length
    console.log(feedback)
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(Math.round(ratingAverage)) ? 0 : Math.round(ratingAverage)}</h4>
    </div>
  )
}

export default FeedbackStats