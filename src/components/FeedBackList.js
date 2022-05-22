import React from 'react'
import Feedbackitem from './Feedbackitem'

function FeedBackList({feedback}) {
    if(!feedback || feedback.length === 0){
        alert('no feedback')
    }
    return (
    <div>
        {feedback.map((item) => (
            <Feedbackitem key={item.id} item={item} />
        ))}
    </div>
  )
}

export default FeedBackList
