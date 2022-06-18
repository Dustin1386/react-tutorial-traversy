import {useState, useContext} from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import AboutIconLink from './AboutIconLink'
import Button from './shared/Button'
import Card from './shared/Card'
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext'




const schema = yup.object().shape({
    text: yup.string().required().min(5, 'must be five characters'),
    rating: yup.number().required()

})

function FeedbackForm() {
    const {register, handleSubmit, formState:{ isDirty, isValid }, reset} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })
    const {addFeedback } = useContext(FeedbackContext)
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)
    const [message, setMessage] = useState('')
    const [selected, setSelected] = useState(null) 
    const handleTextChange = ({ target: { value } }) => { // 👈  get the value
      setText(value)
    }

    console.log(isDirty)

    const submitForm = (data) => {
        console.log(data)
        addFeedback(data)
        reset()
        setSelected(null)        
        
    }
  return (
      <>
    <Card>
        <form onSubmit={handleSubmit(submitForm)}>
            <h2>Feed Back Rating</h2>
            <RatingSelect  selected={selected} register={register}  setSelected={setSelected} select={(rating) => setRating(rating)}/>
            <div className='input-group'>
                <input name="text" onChange={handleTextChange}  {...register('text', { required: true })} type='text' placeholder='write'/>
                <Button type='submit' isDisabled={!isValid || !isDirty}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
    <AboutIconLink />

    </>

  )
}

export default FeedbackForm



