import React from 'react';
import './Help.css';
import { useFormik } from 'formik';

function Help() {
  // Create a Formik instance
  const formik = useFormik({
    // Define initial form values
    initialValues: {
      issue: '',
      additionalDetails: ''
    },
    // Define form submission logic
    onSubmit: values => {
      // Handle form submission logic here
      console.log(values);
      // You can add additional logic here such as sending form data to a server
      // After submission, you may want to reset the form values
      formik.resetForm();
    }
  });

  return (
    <div>
      <div className='help'>
        Help & support
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className='issue'>
          What’s the issue?           
        </div>
        <div className='sbox'>
          {/* Connect input to Formik state */}
          <input
            type="text"
            id='issue'
            name='issue'
            value={formik.values.issue}
            onChange={formik.handleChange}
          />
        </div>
        <div className='issues'>
          Additional Details.
        </div>
        <div className='bbox'>
          {/* Connect input to Formik state */}
          <input
            type="text"
            id='additionalDetails'
            name='additionalDetails'
            value={formik.values.additionalDetails}
            onChange={formik.handleChange}
          />
        </div>
        <div className='buttonhelp'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Help;
