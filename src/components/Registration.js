import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from "./shared/Button";
import * as yup from "yup"

const schema = yup.object().shape({
    fname: yup.string().required(),
    lname: yup.string().required(),
    email: yup.string().email().required(),


})


function Registration() {
    const {handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

  return (
    <>
      <form className="card" onSubmit={handleSubmit(d => console.log(d))}>
        <label htmlFor="fname">
          First name: <input type="fname" htmlFor="fname" />
        </label>
        <label htmlFor="lname">
          Last name: <input type="lname" />
        </label>
        <label htmlFor="email">
          Email name: <input type="email" />
        </label>
        <label htmlFor="phone">
          Phone: <input type="phone" />
        </label>
        <Button type="submit">Send</Button>
      </form>
    </>
  );
}
export default Registration;
