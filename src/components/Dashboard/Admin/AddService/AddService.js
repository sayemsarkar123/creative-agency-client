import React from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const AddService = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    const { title, description, icon } = data
    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('icon', icon[0])
    fetch(`https://evening-meadow-35328.herokuapp.com/addService`, {
      method: 'POST',
      body: formData,
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
            <div className="col-md-6">
              <label>Service Title</label>
              <input
                type="text"
                name="title"
                placeholder="Service Title"
                ref={register({
                  required: {
                    value: true,
                    message: 'This field cannot be empty.',
                  },
                })}
                className={`form-control ${errors.title ? 'is-invalid' : null}`}
              />
              <div className="invalid-feedback">{errors.title?.message}</div>
            </div>
            <div className="col-md-6">
              <h6 className="d-block">Icon</h6>
              <label className="inputfile-label" htmlFor="file">
                <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image
              </label>
              <input
                type="file"
                id="file"
                name="icon"
                className={`form-control-file inputfile ${
                  errors.icon ? 'is-invalid' : null
                }`}
                ref={register({
                  required: {
                    value: true,
                    message: 'This field cannot be empty.',
                  },
                })}
              />
              <div className="invalid-feedback">{errors.icon?.message}</div>
            </div>
            <div className="col-md-6 mt-3">
              <label>Description</label>
              <textarea
                style={{ resize: 'none', height: '6.5rem' }}
                name="description"
                placeholder="Enter Designation"
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
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn mt-3 btn-success text-white"
          />
        </form>
      </div>
    </div>
  )
}

export default AddService
