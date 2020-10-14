import React from 'react'
import { useHistory } from 'react-router-dom'
import './Service.css'

const Service = ({
  service: {
    _id,
    title,
    description,
    img: { img: src },
  },
}) => {
  const history = useHistory()
  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() => history.push(`/dashboard/${_id}`)}
      className="col-md-4 mb-5"
    >
      <div className="px-3 py-5 rounded text-center blog-shadow-dreamy">
        <img
          style={{ maxWidth: '50px' }}
          src={`data:image/png;base64,${src}`}
          alt=""
        />
        <h5 className="my-3 font-weight-bold">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Service
