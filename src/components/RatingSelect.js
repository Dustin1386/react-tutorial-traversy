import {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import { forwardRef } from 'react';




const schema = yup.object().shape({
  ratingSelect: yup.boolean().required().oneOf(['num1','num2','num3','num4'], 'Select number')


})
const RatingSelect = forwardRef(({setSelected, selected}, ref ) => {

  const handleChange = useCallback(event => {
    setSelected(event.target.value)
    setSelected(+event.currentTarget.value)

  }, [setSelected])


  return (
      <ul className='rating'>
        <li>
        <input
            type='radio'
            id='num1'
            name='rating'
            value='1'
            onChange={handleChange}
            checked={selected === 1}
            ref={ref}
      
          />  
          <label htmlFor='num1'>1</label>
          </li>
          <li>
        <input
            type='radio'
            id='num2'
            name='rating'
            value='2'
            onChange={handleChange}
            checked={selected === 2}
            ref={ref}


          />  
          <label htmlFor='num2'>2</label>
          </li>
          <li>
        <input
            type='radio'
            id='num3'
            name='rating'
            value='3'
            onChange={handleChange}
            checked={selected === 3}
            ref={ref}


          />  
          <label htmlFor='num3'>3</label>
          </li>
          <li>
        <input
            type='radio'
            id='num4'
            name='rating'
            value='4'
            onChange={handleChange}
            checked={selected === 4}
            ref={ref}


          />  
          <label htmlFor='num4'>4</label>
          </li>
          </ul>

          
          
          )
})

export default RatingSelect