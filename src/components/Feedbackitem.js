import React from 'react'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { useContext, useCallback} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { useForm } from 'react-hook-form'


const Feedbackitem = ({item}) => {
  const {deleteFeedback } = useContext(FeedbackContext)
  const { setValue } = useForm()
  const handleEdit = useCallback(
   () => {
    setValue('text', 'bob')
   })

    return (
      <Card>
          <div className='num-display'>{item.rating}</div>
          <button onClick={() => deleteFeedback(item.id)} className='close'>
            <FaTimes color='purlple' />
          </button>
          <button onClick={() => handleEdit} className='edit'>
            <FaPencilAlt color='purlple' />
          </button>
          <div className='text-display'>{item.text}</div>
  
      </Card>
    )
}
Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Feedbackitem