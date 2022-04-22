import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword,useSignInWithGoogle,useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import google from "./../../images/icons8-google.svg"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

    const [signInWithEmailAndPassword,user,loading,error]=useSignInWithEmailAndPassword(auth)
    const [signInWithGoogle]=useSignInWithGoogle(auth)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || '/'
   
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)
    
    const handelEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handelPass=(e)=>{
        setPassword(e.target.value)
    }
    if(user){
      navigate(from, {replace: true});
    }
    const resetPass=async () => {
     
      if(email){
        await sendPasswordResetEmail(email);
      toast('Sent email');
      }
      else{
        toast('Please Provide Email');
      }
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
      <p classname="text-danger">{error?.message}</p>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handelPass} type="password" placeholder="Password"  required/>
  </Form.Group>
  
 
  <p>Create An Acoount <Link to='/register'>Register</Link></p>
  <p>Forgot Password?<button className="btn btn-link" onClick={()=>resetPass()}>Reset Password </button></p>
  
  
  <Button className="w-50 d-block mx-auto" variant="primary" type="submit">
    Submit
  </Button>
  <ToastContainer />
 
 <div className='d-flex align-items-center'>
 <div style={{height:"1px"}} className="bg-primary w-50"></div>
  <p className="mt-2 px-2">Or</p>
  <div style={{height:"1px"}} className="bg-primary w-50"></div>
 </div>
 <Button onClick={()=>signInWithGoogle()} className="w-100 rounded-pill" variant="dark" type="submit">
    SignIn with <img width="20px" className="img-fluid" src={google} alt="" />
  </Button>
 
</Form> 
        </div>
    );
};

export default Login;