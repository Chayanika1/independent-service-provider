import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Registration = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[fixedError,setFixedError] = useState('')
    const[confirmPassword,setConfirmPassword]=useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate()
    
    const handelEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handelPassword=(e)=>{
        setPassword(e.target.value)
    }
    const handelConfirmPassword=(e)=>{
        setConfirmPassword(e.target.value)
    }
    const handleRegistration=(e)=>{
        
        createUserWithEmailAndPassword(email,password,confirmPassword);
        e.preventDefault();


    }
    let errorElement;
    if(error){
        errorElement=<p>{error.message}</p>
    }
    if(user){
        navigate('/Home')
    }
   
    return (
        <div className='col-lg-6 col-sm-10 mx-auto'>
             <form onSubmit={handleRegistration}>
                <div class="mb-3">
                    <h1>Please Register</h1>
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onBlur={handelEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onBlur={handelPassword} type="password" class="form-control" id="exampleInputPassword1" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input onBlur={handelConfirmPassword} type="password" class="form-control" id="exampleInputPassword1" required/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                {errorElement}
                <button type="submit" class="btn btn-primary mb-4">Register</button>
                <p>Already have an account? then go to<Link className="p-3"style={{textDecoration:'none'}}to="/Login">Login</Link></p>  
                <SocialLogin></SocialLogin>
            </form>
            
        </div>
    );
};

export default Registration;