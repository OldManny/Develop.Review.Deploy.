"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ContactForm from './ContactForm';

const ContactCard = () => {
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('');  // can be 'success' or 'error'
    const router = useRouter();

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormState({
        ...formState,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });
    
            const data = await res.json();
    
            if (res.status === 200 && data.success) {
                setFormState({
                name: '',
                email: '',
                message: '',
                });
                setStatusMessage('Message sent successfully');
                setStatusType('success');
            } else {
                setStatusMessage('Error sending message');
                setStatusType('error');
            }   
        } catch (error) 
        {
        console.error('Error sending message', error);
        setStatusMessage('Unexpected error occurred. Please try again later.');
        setStatusType('error');       
    }
    router.push('/'); 
  };

  return (
    <div className="">
    <div className="flex w-full justify-center pt-24 mb-12 md:pt-48 md:mb-28">
        <h1 className="text-slate-500 dark:text-slate-400 text-3xl md:text-4xl font-semibold">Get in touch</h1>
    </div>
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-lg mb-20 px-2">
        <ContactForm 
          formState={formState}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
    </div>
  );
};

export default ContactCard;
