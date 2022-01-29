import React, { useState } from 'react';

// validate email format
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    // manage the form data
    // clear the input fields on the component loading 
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // destructure formState object
    const { name, email, message } = formState;

    // define the error message that may occur for input validation
    const [errorMessage, setErrorMessage] = useState('');

    // sync the state with user input
    function handleChange(e) {

        // validate email before syncing the form data 
        if (e.target.name === 'email') {
            // validate the value of the email input field with validateEmail function
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                // empty string if no errror
                setErrorMessage('');
            }
        }
        // message to confirm fields are not blank.
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        // update the formState value for the name, email, message properties
        setFormState({ ...formState, [e.target.name]: e.target.value })

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    // prevent the default action of the form Submit button
    // log the formState object on the Submit button click since we do not have a backend
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // create the DOM elements in the contact form for the three inputs (name, email, and message)
    return (
        <section className="content-section contact-section">
            <div className="contact-section-container">
                <div className="contact-form-wrapper">
                    <div className="under-construction">
                        <p>My contact form is still under construction.</p>
                        <p>Please stay tuned.</p>
                    </div>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        {/* name input */}
                        <div className="form-section">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>

                        {/* email input */}
                        <div className="form-section">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>

                        {/* message text area */}
                        <div className="form-section">
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>

                        {/* render this if there is an error */}
                        {errorMessage && (
                            <div className="form-section">
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}

                        {/* add the button*/}
                        <div className="form-section">
                            <button type="submit">Submit</button>
                        </div>
                    </form>

                    <div className="under-construction">
                        <p>In the meantime, please contact me via email:</p>
                        <a href="mailto:raymondjestrada@hotmail.com">raymondjestrada@hotmail.com</a>
                    </div>

                </div>
                <div className="contact-img-wrapper">
                </div>
            </div>
        </section>
    )
}

export default ContactForm;