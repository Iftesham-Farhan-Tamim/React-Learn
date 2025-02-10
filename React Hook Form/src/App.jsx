// npm i react-hook-form
// npm install @react-oauth/google
// npm install @azure/msal-react @azure/msal-browser
import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function RegForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2 className="form-title">Registration Form</h2>

      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          className={`input-field ${errors.firstName ? 'error' : ''}`}
          {...register('firstName', {
            required: "First Name is required",
            minLength: { value: 3, message: "Min length should be at least 3" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "First Name should only contain letters",
            }
          })}
        />
        {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="middleName">Middle Name:</label>
        <input
          id="middleName"
          className="input-field"
          {...register('middleName')}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          className={`input-field ${errors.lastName ? 'error' : ''}`}
          {...register('lastName', {
            required: "Last Name is required",
            minLength: { value: 3, message: "Min length should be at least 3" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last Name should only contain letters",
            }
          })}
        />
        {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          className={`input-field ${errors.email ? 'error' : ''}`}
          {...register('email', {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            }
          })}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="form-actions">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`submit-button ${isSubmitting ? 'disabled' : ''}`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default RegForm;
