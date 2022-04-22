import React from 'react';
import { useForm } from 'react-hook-form';

const Adduser = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
      const url=`http://localhost:5000/service/`
      fetch(url,{
          method:'POST',
          headers:{
              'content-type':"application/json"
          },
          body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>console.log(result))

  } 


    return (
        <div className='w-50 mx-auto'>
             <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <input placeholder='description' {...register("description", )} />
      <input placeholder='Age' type="number" {...register("price", )} />
      <input placeholder='Photourl' type="text" {...register("img", )} />
      <input type="submit" value={"Add service"} />
    </form>
        </div>
    );
};

export default Adduser;