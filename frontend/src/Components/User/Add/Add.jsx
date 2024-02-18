import React from 'react';
import './Add.css';
import { useFormik } from 'formik';

function Add() {
  // Create a Formik instance
  const formik = useFormik({
    // Define initial form values
    initialValues: {
      farmName: '',
      licenseID: '',
      phoneNumber: '',
      address: '',
      state: '',
      country: '',
      postZipCode: '', // Changed field name to postZipCode
      poultryPopulation: ''
    },
    // Define form validation rules
    validate: values => {
      const errors = {};
      if (!values.farmName) {
        errors.farmName = 'Required';
      }
      if (!values.licenseID) {
        errors.licenseID = 'Required';
      }
      // Add more validation rules for other fields if needed
      return errors;
    },
    // Define form submission logic
    onSubmit: values => {
      // Handle form submission logic here
      console.log(values);
      // You can add additional logic here, such as sending form data to a server
      // After submission, you may want to reset the form values
      formik.resetForm();
    }
  });

  return (
    <div>
      <div className='af'>
        Add Farm Details
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className='fn'>
          Farm Name 
          <input
            type='text'
            name='farmName'
            value={formik.values.farmName}
            onChange={formik.handleChange}
          />
          {formik.touched.farmName && formik.errors.farmName ? (
            <div className="error">{formik.errors.farmName}</div>
          ) : null}
        </div>
        <div className='fl'>
          Farm License ID
          <input
            type='text'
            name='licenseID'
            value={formik.values.licenseID}
            onChange={formik.handleChange}
          />
          {formik.touched.licenseID && formik.errors.licenseID ? (
            <div className="error">{formik.errors.licenseID}</div>
          ) : null}
        </div>
        <div className='ph'>
          Phone Number
          <input
            type='tel' 
            name='phoneNumber'
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
          />
        </div>
        <div className='ads'>
          Address
          <input
            type='text'
            name='address'
            value={formik.values.address}
            onChange={formik.handleChange}
          />
        </div>
        <div className='st'>
          State
          <input
            type='text'
            name='state'
            value={formik.values.state}
            onChange={formik.handleChange}
          />
        </div>
        <div className='con'>
          Country
          <input
            type='text'
            name='country'
            value={formik.values.country}
            onChange={formik.handleChange}
          />
        </div>
        <div className='pz'>
          Post/Zip code
          <input
            type='text' // Changed to input type 'text' for post/zip code
            name='postZipCode'
            value={formik.values.postZipCode}
            onChange={formik.handleChange}
          />
        </div>
        <div className='pop'>
          Poultry Population
          <input
            type='text'
            name='poultryPopulation'
            value={formik.values.poultryPopulation}
            onChange={formik.handleChange}
          />
        </div>
        <div className='ab'>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className='choo'>
        1. ChickenHubOne - License ID: 2332
      </div>
      <div className='chooo'>
        2. ChickenHub - License ID: 1332
      </div>
    </div>
  );
}

export default Add;
