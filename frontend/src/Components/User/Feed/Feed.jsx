import React from 'react';
import './Feed.css';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Feed() {
  const formik = useFormik({
    initialValues: {
      received: '',
      consumed: ''
    },
    onSubmit: (values, { resetForm }) => {
      if (!values.received || !values.consumed) {
        toast.error("Please fill in all required fields.");
      } else {
        toast.success("Form submitted successfully!");
      }
      resetForm();
    },
    validate: values => {
      const errors = {};
      if (!values.received) {
        errors.received = '';
      }
      if (!values.consumed) {
        errors.consumed = '';
      }
      return errors;
    }
  });

  return (
    <div>
      <div className='f'>
        Feed Management    
      </div>
      <div className='fill'>
        Fills the details about your feed
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className='fr'>
          Feed Received
          <input
            type='number'
            id='received'
            name='received'
            placeholder='No of bags'
            min={0}
            value={formik.values.received}
            onChange={formik.handleChange}
          />
          {formik.touched.received && formik.errors.received ? (
            <div className="error">{formik.errors.received}</div>
          ) : null}
        </div>
        <div className='fc'>
          <label>Feed Consumed</label>
          <input
            type='number'
            id='consumed'
            name='consumed'
            placeholder='No of bags'
            min={0}
            value={formik.values.consumed}
            onChange={formik.handleChange}
          />
          {formik.touched.consumed && formik.errors.consumed ? (
            <div className="error">{formik.errors.consumed}</div>
          ) : null}
        </div>
        <div className='bf'> 
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className='frecords'>
        Feed Records
      </div>
      <div>
        <table className='fmtable'>
          <thead>
            <tr>
              <th>Si.no</th>
              <th>Date</th>
              <th>Received</th>
              <th>Consumed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12/02/2023</td>
              <td>4bags</td>
              <td>2bags</td>
            </tr>
            <tr>
              <td>2</td>
              <td>14/02/2023</td>
              <td>4bags</td>
              <td>2bags</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Feed;
