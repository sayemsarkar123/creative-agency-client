import React from 'react';
import { useForm } from 'react-hook-form';

const Footer = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
    <div className="row">
      <div className="col-md-5">
        <h1>Let us handle your project, professionally.</h1>
        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
      </div>
      <div className="col-md-6 ml-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="wasValidated">
          <div className="form-group">
            <input type="email" name="email" placeholder="Your email address" className={`form-control ${errors.email ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
            <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="form-group">
            <input type="text" name="name" placeholder="Your name / company’s name" className={`form-control ${errors.name ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })} />
            <div className="invalid-feedback">{errors.name?.message}</div>
            </div>
            <div className="form-group">
            <textarea style={{resize: 'none', height: '11.5rem'}} name="message" placeholder="Your message" className={`form-control ${errors.message ? 'is-invalid' : null}`} ref={register({ required: { value: true, message: 'This field cannot be empty.' } })}></textarea>
            <div className="invalid-feedback">{errors.message?.message}</div>
            </div>
            <input style={{background: '#10132f'}} type="submit" value="Submit" className="btn text-white mb-5" />
        </form>
      </div>
      </div>
      <h4 className="text-center mt-5">copyright Orange labs 2020</h4>
      </>
  );
};

export default Footer;