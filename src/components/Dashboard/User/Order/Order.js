import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LoginContext } from '../../../../App';
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const Order = ({service: {title: serviceTitle}}) => {
  const { register, handleSubmit, errors } = useForm();
  const [userLog, setUserLog] = useContext(LoginContext);
  const onSubmit = data => {
    const { name, email, projectName, projectDetails, price, projectFile } = data;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('projectName', projectName);
    formData.append('projectDetails', projectDetails);
    formData.append('price', price);
    formData.append('status', 'Pending');
    formData.append('projectFile', projectFile[0]);
    fetch(`http://localhost:4000/addOrder`, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(result => {
        if (result) alert('Order Successfully Placed');
      });
  };
  return (
    <div className="row mt-5">
      <div className="col-md-6">
        <form onSubmit={handleSubmit(onSubmit)} className="wasValidated" >
          <div className="form-group">
            <input type="text" name="name" defaultValue={userLog.name} placeholder="Your name / company’s name" className={`form-control ${errors.name ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>
          <div className="form-group">
            <input type="email" name="email" defaultValue={userLog.email} placeholder="Your email address" className={`form-control ${errors.email ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="form-group">
            <input type="text" name="projectName" defaultValue={serviceTitle} className={`form-control ${errors.projectName ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
            <div className="invalid-feedback">{errors.projectName?.message}</div>
          </div>
          <div className="form-group">
            <textarea style={{resize: 'none', height: '7.5rem'}} name="projectDetails" placeholder="Project Details" className={`form-control ${errors.projectDetails ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })}></textarea>
            <div className="invalid-feedback">{errors.projectDetails?.message}</div>
          </div>
          <div className="form-row">
            <div className="col-md-6">
              <input type="number" name="price" placeholder="Price" className={`form-control ${errors.price ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
              <div className="invalid-feedback">{errors.price?.message}</div>
            </div>
            <div className="col-md-6">
            <label className="inputfile-label" htmlFor="file"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload project file</label>
              <input type="file" id="file" name="projectFile" className={`form-control-file inputfile ${errors.projectFile ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
              <div className="invalid-feedback">{errors.projectFile?.message}</div>
            </div>
          </div>
          <input style={{background: '#10132f'}} type="submit" value="Submit" className="btn text-white mt-3" />
        </form>
      </div>
    </div>
  );
};

export default Order;