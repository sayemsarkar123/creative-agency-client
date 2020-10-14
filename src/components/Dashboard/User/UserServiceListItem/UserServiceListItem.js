import React from 'react'
import './UserServiceListItem.css'

const UserServiceListItem = ({
  listItem: {
    projectName,
    projectDetails,
    status,
    img: { img: src },
  },
}) => {
  return (
    <div className="col-md-4 mt-5">
      <div className="p-3 rounded" style={{ background: '#ffffff' }}>
        <div className="d-flex justify-content-between">
          <img
            style={{ maxWidth: '50px' }}
            src={`data:image/png;base64,${src}`}
            alt=""
          />
          <span
            className={`d-inline-block mb-auto px-2 py-1 rounded ${
              status === 'Pending'
                ? 'danger-text danger-bg'
                : status === 'On Going'
                ? 'warning-text warning-bg'
                : status === 'Done'
                ? 'success-text success-bg'
                : null
            }`}
          >
            {status}
          </span>
        </div>
        <h5 className="my-3">{projectName}</h5>
        <p>{projectDetails}</p>
      </div>
    </div>
  )
}

export default UserServiceListItem
