import React, { useState } from 'react';

const Login = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const handelEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handelPassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleRegistration=(e)=>{
        
        e.preventDefault();


    }
    return (
        <div>
            <form onSubmit={handleRegistration}>
                <div class="mb-3">
                    <h1>Please Login</h1>
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onBlur={handelEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label onBlur={handelPassword}for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    );
};

export default Login;