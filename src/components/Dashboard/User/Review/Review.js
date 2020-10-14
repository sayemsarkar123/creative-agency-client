import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { LoginContext } from '../../../../App'

const Review = () => {
  const [userLog, setUserLog] = useContext(LoginContext)
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    fetch('http://localhost:4000/addFeedback', {
      method: 'POST',
      body: JSON.stringify({ ...data, picture: userLog.picture }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) alert('Your submission has been received!')
      })
  }
  return (
    <div className="row mt-5">
      <div className="col-md-6">
        <form onSubmit={handleSubmit(onSubmit)} className="wasValidated">
          <div className="form-group">
            <input
              type="text"
              name="name"
              defaultValue={userLog.name}
              placeholder="Your name"
              ref={register({
                required: {
                  value: true,
                  message: 'This field cannot be empty.',
                },
              })}
              className={`form-control ${errors.name ? 'is-invalid' : null}`}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="designation"
              placeholder="Company’s name, Designation"
              ref={register({
                required: {
                  value: true,
                  message: 'This field cannot be empty.',
                },
              })}
              className={`form-control ${
                errors.designation ? 'is-invalid' : null
              }`}
            />
            <div className="invalid-feedback">
              {errors.designation?.message}
            </div>
          </div>
          <div className="form-group">
            <textarea
              style={{ resize: 'none', height: '6.5rem' }}
              name="description"
              placeholder="Description"
              ref={register({
                required: {
                  value: true,
                  message: 'This field cannot be empty.',
                },
              })}
              className={`form-control ${
                errors.description ? 'is-invalid' : null
              }`}
            ></textarea>
            <div className="invalid-feedback">
              {errors.description?.message}
            </div>
          </div>
          <input
            style={{ background: '#10132f' }}
            type="submit"
            value="Submit"
            className="btn text-white"
          />
        </form>
      </div>
    </div>
  )
}

export default Review
