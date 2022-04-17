import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Google from "../../Images/Google.png"

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   
   
    return (
        <div>
            <div class="d-grid gap-2">
                <button onClick={()=>signInWithGoogle()} class="btn btn-light border border-5 mb-4" type="button"><img className="rounded-circle"style={{height:'30px',width:'30px'}} src={Google}></img><span className='p-3'>Signin with Google</span></button>

            </div>

        </div>
    );
};

export default SocialLogin;