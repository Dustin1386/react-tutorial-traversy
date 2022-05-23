import React from 'react'
import Feedbackitem from './Feedbackitem'

function FeedBackList({feedback}) {
    if(!feedback || feedback.length === 0){
        alert('no feedback')
    }
    return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <Feedbackitem key={item.id} item={item} />
        ))}
    </div>
  )
}

export default FeedBackList
