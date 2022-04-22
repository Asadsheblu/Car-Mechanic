import React, { useState } from 'react';
// import auth from '../../../firebase.init'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSignInWithGoogle,useSignInWithGithub } from 'react-firebase-hooks/auth';
import google from '../../images/icons8-google.svg'
import github from '../../images/icons8-github.svg'
const SIgnUp = () => {
    
    const [email,setEmail]=useState("")
    const [agree,setAgree]=useState(false)
    const [password,setPassword]=useState("")
    const [confrimPassword,setConfrimPassword]=useState("")
    const [error,setError]=useState("")
    const [displayName,setName]=useState('')
    const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth,{sendEmailVerification :true})
    const [updateProfile,updating]=useUpdateProfile(auth)
    const [signInWithGoogle]=useSignInWithGoogle(auth)
    const [signInWithGithub] = useSignInWithGithub(auth);
    let navigate=useNavigate()
    console.log(user)
    if(user){
        navigate('/')
        console.log(user)
    }
    const handelName=(e)=>{
      setName(e.target.value)
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
    const handelChecked=(e)=>{
      setAgree(e.target.checked)
    }
    const loginForm=async(e)=>{
        e.preventDefault()
        if(password!==confrimPassword){
            setError("Your Two Password don't match..Please try To Again")
            return
        }
        if(password.length<6){
            setError('Please type password at least 6 character')
        }
       
       await  createUserWithEmailAndPassword(email,password)
     
       await updateProfile({ displayName });
       alert('Updated profile');
     
     
        
       
    }
    return (
        <div  className=' w-25 mx-auto'>

           <Form onSubmit={loginForm}>
          
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Your Name</Form.Label>
    <Form.Control onBlur={handelName} type="text" placeholder="Enter Name" required /></Form.Group>
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
  <input onClick={handelChecked} type="checkbox" name="terms" id="" />
  <label className={`ps-2 ${agree?"text-primary":"text-danger"}`}  htmlFor="terms">Do You Agree Genius Terms & Condition?</label>
  <p>Already Have An Acoount?. <Link to='/login'>Login</Link></p>
  
  <Button disabled={!agree} className="w-100" variant="primary" type="submit">
    Registration
  </Button>
  <div className='d-flex align-items-center'>
 <div style={{height:"1px"}} className="bg-primary w-50"></div>
  <p className="mt-2 px-2">Or</p>
  <div style={{height:"1px"}} className="bg-primary w-50"></div>
 </div>
 
  <Button onClick={()=>signInWithGoogle()} className="w-100 rounded-pill px-2" variant="dark" type="submit">
    Registration with <img width="20px" className="img-fluid" src={google} alt="" />
  </Button>
  <Button onClick={()=>signInWithGithub()} className="w-100 mt-3 rounded-pill" variant="primary" type="submit">
    Registration with <img width="20px" className="img-fluid" src={github} alt="" />
  </Button>

</Form> 
        </div>
    );
};

export default SIgnUp;