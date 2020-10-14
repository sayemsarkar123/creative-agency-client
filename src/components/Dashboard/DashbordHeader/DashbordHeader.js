import React, { useContext } from 'react'
import { LoginContext } from '../../../App'

const DashbordHeader = ({ changeComponent }) => {
  const [userLog, setUserLog] = useContext(LoginContext)
  return (
    <div className="container-fluid mt-3">
      <div className="row align-items-center">
        <div className="col-md-3">
          <img
            className="d-block mx-auto"
            style={{ maxWidth: '150px' }}
            src="https://i.ibb.co/VNQvqry/logo.png"
            alt=""
          />
        </div>
        <div className="col-md-9 d-flex justify-content-between">
          <h5>
            {changeComponent === 'order'
              ? 'Order'
              : changeComponent === 'userServiceList'
              ? 'Service List'
              : changeComponent === 'review'
              ? 'Review'
              : changeComponent === 'addService'
              ? 'Add Service'
              : changeComponent === 'addAdmin'
              ? 'Make Admin'
              : changeComponent === 'adminServiceList'
              ? 'Service List'
              : null}
          </h5>
          <h6 className="mr-3">{userLog.name}</h6>
        </div>
      </div>
    </div>
  )
}

export default DashbordHeader
