import React, { useState } from 'react';
// import auth from '../../../firebase.init'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SIgnUp = () => {
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confrimPassword,setConfrimPassword]=useState("")
    const [error,setError]=useState("")
    const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)
    let navigate=useNavigate()
    console.log(user)
    if(user){
        navigate('/')
    }
    const handelemail=(e)=>{
        setEmail(e.target.value)
    }

    const handelePass=(e)=>{
        setPassword(e.target.value)
    }
    const handeleConfrimPass=(e)=>{
        setConfrimPassword(e.target.value)
    }
    const loginForm=(e)=>{
        e.preventDefault()
        if(password!==confrimPassword){
            setError("Your Two Password don't match..Please try To Again")
            return
        }
        if(password.length<6){
            setError('Please type password at least 6 character')
        }
        
        createUserWithEmailAndPassword(email,password)
        
       
    }
    return (
        <div  className=' w-25 mx-auto'>
           <Form onSubmit={loginForm}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handelemail} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handelePass} type="password" placeholder="Password"required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confrim-Password</Form.Label>
    <Form.Control onBlur={handeleConfrimPass} type="password" placeholder="Password" required />
    <p className='text-danger'>{error}</p>
  </Form.Group>
  <p>Already Have An Acoount <Link to='/login'>Login</Link></p>
  
  <Button className="w-100" variant="primary" type="submit">
    Registration
  </Button>
</Form> 
        </div>
    );
};

export default SIgnUp;