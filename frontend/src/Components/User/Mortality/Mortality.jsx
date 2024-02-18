import React from 'react';
import './Mortality.css';
import { useFormik } from 'formik';

function Mortality() {
  const formik = useFormik({
    initialValues: {
      date: '',
      quantity: ''
    },
    onSubmit: values => {
      // Handle form submission logic here
      console.log(values);
      
      // Reset the form after submission
      formik.resetForm();
    },
    validate: values => {
      const errors = {};
      if (!values.date) {
        errors.date = 'Required';
      }
      if (!values.quantity) {
        errors.quantity = 'Required';
      }
      return errors;
    }
  });

  return (
    <div>
      <div className='m'>
        Mortality Management    
      </div>
      <div className='fillmo'>
        Fill in the details about Mortality
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className='da'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            id='date'
            name='date'
            value={formik.values.date}
            onChange={formik.handleChange}
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="error">{formik.errors.date}</div>
          ) : null}
        </div>
        <div className='qu'>
          <label htmlFor='quantity'>Quantity</label>
          <input
            type='number'
            id='quantity'
            name='quantity'
            min="1"
            value={formik.values.quantity}
            onChange={formik.handleChange}
          />
          {formik.touched.quantity && formik.errors.quantity ? (
            <div className="error">{formik.errors.quantity}</div>
          ) : null}
        </div>
        <div className='bmm'> 
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className='mmrecords'>
        Mortality Records
      </div>
      <div>
        <table  className='mtable'>
          <thead>
            <tr>
              <th>Si.no</th>
              <th>Date</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12/02/2023</td>
              <td>2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>14/02/2023</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mortality;
