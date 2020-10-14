import React from 'react'

const Feedback = ({
  feedback: { name, designation, description, picture },
}) => {
  return (
    <div className="col-md-4 mt-5">
      <div className="p-3 border border-silver">
        <div className="d-flex align-items-center mb-3">
          <img
            style={{ maxWidth: '50px' }}
            className="rounded-circle"
            src={picture}
            alt=""
          />
          <div className="ml-3">
            <h5 className="mb-1">{name}</h5>
            <h6 className="m-0">{designation}</h6>
          </div>
        </div>
        <p className="text-secondary">{description}</p>
      </div>
    </div>
  )
}

export default Feedback
