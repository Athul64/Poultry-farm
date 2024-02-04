import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
      navigate('/admin/home');
    },
  });

  return (
    <div className='login'>
      <h1>Poultry Farm</h1>
      <br />
      <form onSubmit={formik.handleSubmit}>
        <div className='email-button'>
          <label>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email address'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <br />
          {formik.touched.email && formik.errors.email ? (
            <div className='error'>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='..................'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <br />
          {formik.touched.password && formik.errors.password ? (
            <div className='error'>{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <button className='loginbu' type='submit'>
            Login
          </button>
        </div>
      </form>
      <br />
      <div>
        <button className='topright'>Login</button>
      </div>
    </div>
  );
}

export default Login;
