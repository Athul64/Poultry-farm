import React from 'react';
import './Medicine.css';
import { useFormik } from 'formik';

function Feed() {
  const formik = useFormik({
    initialValues: {
      date: '',
      vaccinationDate: '',
      quantity: '',
      medicineName: ''
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
      if (!values.vaccinationDate) {
        errors.vaccinationDate = 'Required';
      }
      if (!values.quantity) {
        errors.quantity = 'Required';
      }
      if (!values.medicineName) {
        errors.medicineName = 'Required';
      }
      return errors;
    }
  });

  return (
    <div>
      <div className='m'>
        Medicine Management    
      </div>
      <div className='fillm'>
        Fills the details about your Medicine
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className='d'>
          <label>Date</label>
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
        <div className='dv'>
          <label>Date of Vaccination</label>
          <input
            type='date'
            id='vaccinationDate'
            name='vaccinationDate'
            value={formik.values.vaccinationDate}
            onChange={formik.handleChange}
          />
          {formik.touched.vaccinationDate && formik.errors.vaccinationDate ? (
            <div className="error">{formik.errors.vaccinationDate}</div>
          ) : null}
        </div>
        <div className='q'>
          <label>Quantity</label>
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
        <div className='mn'>
          <label>Medicine Name</label>
          <input
            type='text'
            id='medicineName'
            name='medicineName'
            value={formik.values.medicineName}
            onChange={formik.handleChange}
          />
          {formik.touched.medicineName && formik.errors.medicineName ? (
            <div className="error">{formik.errors.medicineName}</div>
          ) : null}
        </div>
        <div className='bm'> 
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className='mrecords'>
        Medicine Records    
      </div>
      <div>
        <table  className='mmtable'>
          <thead>
            <tr>
              <th>Si.no</th>
              <th>Date</th>
              <th>Medicine Name</th>
              <th>Quantity</th>
              <th>Last Vaccination Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12/02/2023</td>
              <td>abc</td>
              <td>2</td>
              <td>13/02/2023</td>
            </tr>
            <tr>
              <td>1</td>
              <td>12/02/2023</td>
              <td>bcd</td>
              <td>1</td>
              <td>14/02/2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Feed;
