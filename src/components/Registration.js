import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from "./shared/Button";
import * as yup from "yup"

const schema = yup.object().shape({
    fname: yup.string().required(),
    lname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(30).required()


})


function Registration() {
    const {register, handleSubmit, formState:{errors, isValid, isDirty}, reset,} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
          fname: '',
          lname: '',
          email: '',
          password: '',
        }
    });

    const submitForm = (data) => {
      reset()
      console.log(data)

    }
    console.log(isValid, 'isDirty')

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




        <Button type="submit" isDisabled={!isValid || !isDirty}>Submit</Button>

      </form>
    </>
  );
}
export default Registration;
