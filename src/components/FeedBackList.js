import React from 'react'
import {motion, AnimatePresence } from 'framer-motion'
import Feedbackitem from './Feedbackitem'

function FeedBackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0){
        alert('no feedback')
    }
    return (
    <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item) => (
            <motion.div 
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <Feedbackitem key={item.id} item={item}
            handleDelete={handleDelete}
             />
             </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )
}

export default FeedBackList
