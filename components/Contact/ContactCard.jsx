// "use client";
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const ContactCard = () => {
//     const [statusMessage, setStatusMessage] = useState('');
//     const [statusType, setStatusType] = useState('');  // can be 'success' or 'error'
//     const router = useRouter();

//     const [formState, setFormState] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         setFormState({
//         ...formState,
//         [e.target.name]: e.target.value,
//         });
//     };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         const res = await fetch('/api/contact', {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formState),
//         });
  
//         const data = await res.json();
  
//         if (res.status === 200 && data.success) {
//             setFormState({
//             name: '',
//             email: '',
//             message: '',
//             });
//             setStatusMessage('Message sent successfully');
//             setStatusType('success');
//         } else {
//             setStatusMessage('Error sending message');
//             setStatusType('error');
//         }   
//     } catch (error) 
//     {
//       console.error('Error sending message', error);
//       setStatusMessage('Unexpected error occurred. Please try again later.');
//         setStatusType('error');       
//     }
//     router.push('/'); 
//   };

// return (
//     <div className="flex items-center justify-center min-h-screen px-4 py-28 md:py-0">
//         <div className="w-full max-w-md">
//             <form
//                 onSubmit={handleSubmit}
//                 className="contact-form bg-slate-200"
//             >
//                 <div className="mb-4">
//                     <label
//                         className="text-gray-500 text-sm font-semibold"
//                         htmlFor="name"
//                     >
//                         Name
//                     </label>
//                     <input
//                         className="bg-white shadow-md text-gray-500"
//                         name="name"
//                         type="text"
//                         required
//                         value={formState.name}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label
//                         className="text-gray-500 text-sm font-semibold"
//                         htmlFor="email"
//                     >
//                         Email
//                     </label>
//                     <input
//                         className="bg-white shadow-md text-gray-500"
//                         name="email"
//                         type="email"
//                         required
//                         value={formState.email}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="mb-6">
//                     <label
//                         className="text-gray-500 text-sm font-semibold"
//                         htmlFor="message"
//                     >
//                         Message
//                     </label>
//                     <textarea
//                         className="bg-white shadow-md text-gray-500"
//                         name="message"
//                         required
//                         value={formState.message}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <button className="contact-button" type="submit">
//                         Send
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
// );

// };

// export default ContactCard;



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
    <div className="flex items-center justify-center min-h-screen px-4 py-28 md:py-0">
      <div className="w-full max-w-md">
        <ContactForm 
          formState={formState}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ContactCard;
