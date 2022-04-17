import React, { useState } from 'react';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)

    }
    const handleLogin = (e) => {
        signInWithEmailAndPassword(email, password)
        e.preventDefault()
    }
    let errorElement;
    if (user) {
        navigate('/Home')
    }
    if (error) {
        errorElement = <p>Error : {error.message}</p>
    }
    


    return (
        <div className='w-50 mx-auto mt-5 border border-4 p-4'>
            <form onSubmit={handleLogin}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onBlur={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onBlur={handlePassword} type="password" class="form-control" id="exampleInputPassword1" />
                </div>

                {errorElement}

                <button type="submit" class="btn btn-primary">Login</button>
                <p>new to here? then go to<Link className="p-3"style={{textDecoration:'none'}}to="/Registration">Registration</Link></p>
                <SocialLogin></SocialLogin>
            </form>
            

        </div>
    );
};

export default Login;