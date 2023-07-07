// components/Form.tsx
"use client";
import { useState } from 'react';
import { useStore } from './store';
import { useForm } from 'react-hook-form';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const { addFormData } = useStore()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const getData = () => {
    if (name && email && age) {
      addFormData({ name, email, age: parseInt(age) });
      setName('');
      setEmail('');
      setAge('');
    }
    Swal.fire({
      icon: 'success',
      title: 'Submitted successfully',
      showConfirmButton: false,
      timer: 1500
    })
    reset()
  };

  return (
    <form onSubmit={handleSubmit(getData)} className="space-y-4 flex flex-col bg-white text-black p-10 shadow-lg shadow-black rounded-lg">
      <div className='w-full'>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true, pattern: /^[a-zA-Z ]*$/})}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 w-full text-black"
        />
        {errors.name?.type==='required' && (
                  <p className="text-red-600">Name is Required</p>
                )}
        {errors.name?.type==='pattern' && (
                  <p className="text-red-600">Enter a valid Name</p>
                )}
      </div>
      <div className='w-full'>
        <label htmlFor="email">Email </label>
        <input
          type="text"
          id="email"
          {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 w-full text-black"
        />
        {errors.email?.type==='required' && (
                  <p className="text-red-600">Email is Required</p>
                )}
        {errors.email?.type==='pattern' && (
                  <p className="text-red-600">Enter a valid Email</p>
                )}
      </div>
      <div>
        <label htmlFor="age">Age </label>
        <input
          type="text"
          id="age"
          {...register("age", { required: true, pattern:/^([1-9]\d*)$/ })}
          onChange={(e) => setAge(e.target.value)}
          className="border border-gray-300 p-2 w-full text-black"
        />
        {errors.age?.type==='required' && (
                  <p className="text-red-600">Age is Required</p>
                )}
        {errors.age?.type==='pattern' && (
                  <p className="text-red-600">Enter a valid Age</p>
                )}
      </div>
      <button type="submit" className="bg-amber-600 text-white py-2 px-4 rounded w-2/4 mx-auto">
        Submit
      </button>
    </form>
  );
};

export default Form;
