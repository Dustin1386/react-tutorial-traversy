import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from "./shared/Button";
import * as yup from "yup"
import { States } from "../Data.js";
const schema = yup.object().shape({
    fname: yup.string().required(),
    lname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(30).required(),
    states: yup.string().oneOf(States.map((e) => e.abbreviation)).required(),
    zipcode: yup.string().matches(/^[0-9]+$/, "Must be only digits").min(5,'must be five').max(5)

})


function Registration() {
  let stateArray = States.map(e => e.abbreviation)
    const {register, handleSubmit, formState:{errors, isValid, isDirty}, reset,} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
          fname: '' ,
          lname: '',
          email: '',
          password: '',
          states:'',
          zipcode: '',
        }
    });

    const submitForm = (data) => {
      reset()

    }

  return (
    <>
      <form className="card" onSubmit={handleSubmit(submitForm)}>
        <input type="text" name="fname" placeholder="First Name" {...register('fname', { required: true })}/>
        {errors?.fname && <p>{errors.fname.message}</p>}
        <input type="text" name="zipcode" placeholder="Zip Code" {...register('zipcode', { required: true })}/>
        {errors?.zipcode && <p>{errors.zipcode.message}</p>}        
        <input type="text" name="lname"  placeholder="Last Name" {...register('lname', { required: true })}/>
        {errors?.lname && <p>{errors.lname.message}</p>}        
        <input type="text" name="email" placeholder="Email" {...register('email', { required: true })}/>
        {errors?.email && <p>{errors.email.message}</p>}        
        <input type="text" name="password"  placeholder="Password" {...register('password', { required: true })}/>
        {errors?.password && <p>{errors.password.message}</p>} 
        <select name="states" placeholder="States" {...register('states', { required: true })}>
        <option value="" selected disabled hidden>{stateArray[0]}</option>
        {
          States.map(el => <option value={el.abbreviation} key={el.abbreviation}> {el.abbreviation} </option>)
        }
      </select>       




        <Button type="submit" isDisabled={!isValid || !isDirty}>Submit</Button>

      </form>
    </>
  );
}
export default Registration;
