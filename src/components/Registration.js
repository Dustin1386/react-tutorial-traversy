import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from "./shared/Button";
import * as yup from "yup"
import { States } from "../Data.js";
const stateArray = States.map(e => e.abbreviation)
const schema = yup.object().shape({
    fname: yup.string().required(),
    lname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(30).required(),
    states: yup.string().oneOf(States.map((e) => e.abbreviation)).required()


})


function Registration() {
  console.log()
    const {register, handleSubmit, formState:{errors, isValid, isDirty}, reset,} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
          fname: '',
          lname: '',
          email: '',
          password: '',
          states:'AL',
        }
    });

    const submitForm = (data) => {
      reset()
      console.log(data)

    }
    console.log(isValid)

  return (
    <>
      <form className="card" onSubmit={handleSubmit(submitForm)}>
        <input type="text" name="fname" placeholder="First Name" {...register('fname', { required: true })}/>
        {errors?.fname && <p>{errors.fname.message}</p>}        
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
