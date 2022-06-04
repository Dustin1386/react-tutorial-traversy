import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from "./shared/Button";
import * as yup from "yup"

const schema = yup.object().shape({
    fname: yup.string().required,
    lname: yup.string().required,
    email: yup.string().email().required,


})


function Registration() {
    const {handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

  return (
    <>
      <form className="card" onSubmit={handleSubmit(d => console.log(d))}>
        <label for="fname">
          First name: <input type={"text"} for="fname" />
        </label>
        <label for="lname">
          Last name: <input type={"text"} for="lname" />
        </label>
        <label for="email">
          Email name: <input type={"email"} for="email" />
        </label>
        <label for="phone">
          Phone: <input type={"tel"} for="phone" />
        </label>
        <Button type="submit">Send</Button>
      </form>
    </>
  );
}
export default Registration;
