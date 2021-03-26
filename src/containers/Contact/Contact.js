import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

import Aux from '../../hoc/Aux/Aux';
import Input from '../../components/UI/Input/Input';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateObject, checkValidity } from '../../shared/utility';

const Contact = props => {
    const [contactForm, setContactForm] = useState({
        name: {
            elementName: 'Name',
            elementInput: 'user_name',
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ' Your Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementName: 'Email',
            elementInput: 'user_email',
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: ' Your E-Mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        message: {
            elementName: 'Message',
            elementInput: 'message',
            elementType: 'textarea',
            elementConfig: {
                type: 'text',
                placeholder: ' Want to say something?'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        }
    });

    useEffect(() => init("user_X9kgtqlsTa8Bzfr5s9Kpa"), []);

    const [formIsValid, setFormIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(contactForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, contactForm[inputIdentifier].validation),
            touched: true
        });
        const updatedContactForm = updateObject(contactForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedContactForm) {
            formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid;
        }
        setContactForm(updatedContactForm);
        setFormIsValid(formIsValid);
    };

    let emailResult = null;
    if (isLoading) {
        emailResult = <Spinner />;
    }

    const sendEmailHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.sendForm('service_v72nvfp', 'template_fm53pm1', e.target, 'user_X9kgtqlsTa8Bzfr5s9Kpa')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setIsLoading(false);
            }, (error) => {
                console.log('FAILED', error);
                setIsError(true);
                setIsLoading(false);
            });
    }

    const formElementsArray = [];
    for (let key in contactForm) {
        formElementsArray.push({
            id: key,
            config: contactForm[key]
        });
    };

    const buttonClass = formIsValid ? "mt-2 w-28 p-2 items-center rounded-lg bg-indigo-800 text-gray-50 font-serif cursor-pointer" : "mt-2 w-28 p-2 items-center rounded-lg bg-gray-500 text-gray-50 font-serif cursor-not-allowed"

    let form = (
        <form onSubmit={sendEmailHandler} className="flex flex-col mx-5 mb-4 xl:mb-16 lg:mb-12 md:mb-8 font-serif">
            <input type="hidden" name="contact_number" />
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig} 
                    label={formElement.config.elementName}
                    name={formElement.config.elementInput}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => inputChangedHandler(event, formElement.id)} />
            ))}
            <input type="submit" value="Submit" className={buttonClass} disabled={!formIsValid}/>
        </form>
    );

    return (
        <Aux>
            {isError && <Modal show={isError} modalClosed={() => setIsError(false)}>Failed to send Email!</Modal>}
            <div className="w-full min-h-xl justify-start flex flex-col xl:mt-32 lg:mt-28 md:mt-24 sm:mt-20 px-4 xl:px-32 lg:px-24 md:px-16 sm:px-8 font-sans text-indigo-800">
                <h1 class="w-4/5 text-lg mx-5 mt-16 font-bold xl:text-8xl lg:text-6xl md:text-4xl sm:text-2xl tracking-wider">Have a desire to work together with me?</h1>
                <div class="xl:w-3/5 md:w-3/4 sm:w-full font-serif">
                    <p class="text-sm mx-5 my-4 xl:text-lg md:text-md">I'm really excited to chat with other developers, designers, or others. Feel free to leave a message for me if you would like to have a conversation.</p>
                </div>
                <h2 class="text-lg mx-5 font-bold my-4 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">Let's talk together!</h2>
                {form}
                {emailResult}
            </div>
        </Aux>

    );
};

export default Contact;