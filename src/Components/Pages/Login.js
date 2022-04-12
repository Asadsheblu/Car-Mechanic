import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Login = () => {

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

    const [signInWithEmailAndPassword,user,error,loading]=useSignInWithEmailAndPassword(auth)
    
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'
    
    
    const handelEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handelPass=(e)=>{
        setPassword(e.target.value)
    }
    if(user){
      navigate(from, {replace: true});
    }
    
    const handelLogin=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
    }
    return (
        <div className='w-25 mx-auto'>
           <Form onSubmit={handelLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handelEmail} type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handelPass} type="password" placeholder="Password"  required/>
  </Form.Group>
  {
      loading && <p>Loading......</p>
  }
  <p className='text-danger'>{error?.message}</p>
  <p>Create An Acoount <Link to='/register'>Register</Link></p>
  
  <Button className="w-100" variant="primary" type="submit">
    Submit
  </Button>
</Form> 
        </div>
    );
};

export default Login;