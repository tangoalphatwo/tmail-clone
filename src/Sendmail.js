import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Sendmail.css';
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from './Firebase';
import firebase from 'firebase/compat/app';

function Sendmail() {

    // useForm hook from react
    const { register, handleSubmit, formState: { errors } } = useForm();

    // handles the click functionality from the form
    const onSubmit = (formData) => {
         console.log(formData);
         db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        dispatch(closeSendMessage());
    };

    // dispatches an action into redux
    const dispatch = useDispatch();

  return (
    <div className='sendMail'>
        <div className='sendMail__header'>
            <h3>New Message</h3>
            <Close onClick={() => dispatch(closeSendMessage())} className='sendMail__close' />
        </div>

        {/* form component */}
        {/* onSubmit passes to react hook forms */}
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* ref passes required field to register function in react hook forms */}
            <input {...register('to', { required: true })} placeholder='To' type='email'/>
            {/* if field is blank, pop error message */}
            {errors.to && <p>Invalid email address</p>}
            

            <input {...register('subject', { required: true })} placeholder='Subject' type='text'/>
            {errors.to && <p>A subject is required</p>}

            <input className='sendMail__message' {...register('message', { required: true })} placeholder='Message...' type='text'/>
            {errors.to && <p>Please add a message</p>}

            <div className='sendMail__options'>
                <Button className='sendMail__send' variant='contained' type='submit'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default Sendmail
