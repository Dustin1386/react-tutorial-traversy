import {useState, useRef} from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import AboutIconLink from './AboutIconLink'
import RatingSelect from './RatingSelect'
import Rating from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'


const schema = yup.object().shape({
    textInput: yup.string().required().min(5, 'must be five characters'),
    ratingSelect: yup.boolean().required().oneOf(['num1','num2','num3','num4'], 'Select number')


})

function FeedbackForm({handleAdd}) {
    const inputRef = useRef(null)
    const {register, handleSubmit, formState:{errors, isValid, isDirty}, reset} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })
    console.log(isValid)
    const [text, setText] = useState('')
    const [rating, setRating] = useState(null)
    const [message, setMessage] = useState('')
    const [selected, setSelected] = useState(null)  


    const handleTextChange = (e) =>{
        setText(e.target.value)
    }
    const submitForm = (e) => {
        e.preventDefault(e)
        reset()
        
    


        }

  return (
      <>
    <Card>
        <form onSubmit={handleSubmit(submitForm)}>
            <h2>hello</h2>
            <Rating name="ratingSelect" selected={selected} ref={inputRef} setSelected={setSelected} {...register('ratingSelect', { required: true })} select={(rating) => setRating(rating)}/>
            <div className='input-group'>
                <input name="textInput" onChange={handleTextChange}  {...register('textInput', { required: true })} type='text' placeholder='write'/>
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



