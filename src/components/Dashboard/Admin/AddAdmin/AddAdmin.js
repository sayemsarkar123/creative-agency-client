import React from 'react'
import { useForm } from 'react-hook-form'

const AddAdmin = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    fetch('https://evening-meadow-35328.herokuapp.com/addAdmin', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) alert('Successfully Added')
      })
  }
  return (
    <div className="row mt-5">
      <div className="col-md-8">
        <form onSubmit={handleSubmit(onSubmit)} className="wasValidated">
          <div className="form-row">
            <div className="col-md-9">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="jon@gamil.com"
                ref={register({
                  required: {
                    value: true,
                    message: 'This field cannot be empty.',
                  },
                })}
                className={`form-control ${errors.email ? 'is-invalid' : null}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="col-md-3 mt-auto">
              <input
                type="submit"
                value="Submit"
                className="btn btn-success text-white"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddAdmin
