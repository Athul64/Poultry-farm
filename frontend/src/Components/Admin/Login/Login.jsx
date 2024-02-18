import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
          'Invalid password'
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate('/admin/home');
    },
  });

  return (
    <div className='login'>
      <div className='alh'>Poultry Farm</div>
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
            placeholder='Enter your password'
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
        <button className='toprightad'>Login</button>
      </div>
    </div>
  );
}

export default Login;
