import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../../utils/helpers';

//component for contact form with email validation

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    function handleChange(e) {
        if (e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid){
                setErrorMessage('* Your email is invalid. *');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length){
                setErrorMessage(`* ${e.target.name} is required. *`);
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage){
                setFormState({...formState, [e.target.name]: e.target.value })
            }
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);

        if (!errorMessage || formState.name !== "" || formState.email !== "" || formState.message !== "") {
          setSuccess(true);
            
          emailjs.sendForm('service_cf1ve0u', 'template_6azpf16', e.target, 'user_hjCqXQnqYMBA4uwwmf87Y')
          .then((result) => {
              console.log(result.text);

              setFormState({ name: '', email: '', message: ''})
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        }
    }

    return (
        <section>
            <h1 className="mx-5 my-3">Contact Me</h1>
            
            <form id="contact-form" className="mx-5" onSubmit={handleSubmit}>
            <p>Fill out and submit this form to quickly and easily reach me and I will get back to you as soon as possible! Alternatively, you can email me at <strong>PortfolioJE001@gmail.com</strong></p>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                  <div>
                    <p className="error-text">{errorMessage}</p>
                  </div>
                )}
                {success && (
                  <div>
                    <p className="error-text">Message Sent!</p>
                  </div>
                )}
                <button type="submit" data-testid="button">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;