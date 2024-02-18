import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [state, handleSubmit] = useForm("xyyqzogo");
    if (state.succeeded) {
        return (

        <div className='newsletter-form success'>
            <p>Thanks for subscribing!</p>

        </div>

        )

    }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };



  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
        <h2 className="subhead">Newsletter</h2>
      <label htmlFor="email">Subscribe to my bi-weekly newsletter (coming soon)</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <button className="form-button" type="submit" disabled={state.submitting}>Subscribe</button>
    </form>
  );
}

export default Newsletter