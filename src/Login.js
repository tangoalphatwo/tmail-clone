import { Button } from '@mui/material';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './Firebase';
import './Login.css';

function Login() {
    // react-redux dispatch hook
    const dispatch = useDispatch();

    //
    const signIn = () => {
        // auth
        auth.signInWithPopup(provider)
        .then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        }).catch((error) => alert(error));
    };

  return (
    <div className='login'>
        {/*  */}
        <div className='login__container'>
            {/*  */}
            <img src='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2FscGFjYS0yLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fSwidG9Gb3JtYXQiOiJhdmlmIn19' alt='' />
            <Button variant='contained' color='primary' onClick={signIn} >Login</Button>
        </div>
    </div>
  )
}

export default Login