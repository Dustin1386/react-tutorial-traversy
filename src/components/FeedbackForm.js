import {useState, useRef, useContext} from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import AboutIconLink from './AboutIconLink'
import Button from './shared/Button'
import Card from './shared/Card'


const schema = yup.object().shape({
    text: yup.string().required().min(5, 'must be five characters'),
    rating: yup.number().required()

})

function FeedbackForm({handleAdd}) {
    const {register, handleSubmit, formState:{errors, isDirty, isValid}, reset} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    })
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0)
    const [message, setMessage] = useState('')
    const [selected, setSelected] = useState(null) 
    const handleTextChange = ({ target: { value } }) => { // 👈  get the value
      setText(value)
    }
    const handleChange = (event) =>{
    setSelected(event.target.value)
    setSelected(+event.currentTarget.value)
    }


    const submitForm = (data) => {
        const newFeedback = {
            text,
            selected
        }
        console.log(data)
        handleAdd(data)
        reset()
        setSelected(null)        
        
    }
  return (
      <>
    <Card>
        <form onSubmit={handleSubmit(submitForm)}>
            <h2>hello</h2>
            <ul className='rating'>
        <li>
        <input
        {...register('rating', {required:true})}
            type='radio'
            id='num1'
            name='rating'
            value={1} 
            onChange={handleChange}
            checked={selected === 1}
      
          />  
          <label htmlFor='num1'>1</label>
          </li>
          <li>
        <input
          {...register('rating', {required:true})}
            type='radio'
            id='num2'
            name='rating'
            value={2}
            onChange={handleChange}
            checked={selected === 2}


          />  
          <label htmlFor='num2'>2</label>
          </li>
          <li>
        <input
        {...register('rating', {required:true})}
            type='radio'
            id='num3'
            name='rating'
            value={3}
            onChange={handleChange}
            checked={selected === 3}


          />  
          <label htmlFor='num3'>3</label>
          </li>
          <li>
        <input
        {...register('rating', {required:true})}
            type='radio'
            id='num4'
            name='rating'
            value={4}
            onChange={handleChange}
            checked={selected === 4}


          />  
          <label htmlFor='num4'>4</label>
          </li>
          </ul>
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



