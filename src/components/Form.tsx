// import React from 'react';
import { FormEvent, useState } from 'react';
import '../styles/Form.css';

const Form = () => {


  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, firstName: event.target.value }));
    console.log('form state', formState.firstName);
  };
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, lastName: event.target.value }));
    console.log('form state', formState.lastName);
  };


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.warn("Thank you! Check your email inbox!")
    // Validate your form as needed
    // startGame(formState);
  };



    return (

      <form className='form-container' onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor="firstName">Prénom</label>
          <input
            className='form-input'
            type="text"
            id="firstName"
            value={formState.firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className='form-field'>
          <label htmlFor="lastName">NOM</label>
          <input
            className='form-input'
            type="text"
            id="lastName"
            value={formState.lastName}
            onChange={handleLastNameChange}
          />
        </div>

        <button  className='form-submit' type="submit">Confirmer</button>
      </form>
    );
};


export default Form;
