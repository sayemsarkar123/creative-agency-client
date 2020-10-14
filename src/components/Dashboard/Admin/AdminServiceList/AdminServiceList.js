import React, { useEffect, useState } from 'react'
import './AdminServiceList.css'

const AdminServiceList = () => {
  const [serviceListItems, setServiceListItems] = useState([])
  useEffect(() => {
    fetch('https://evening-meadow-35328.herokuapp.com/getAllOrders')
      .then((response) => response.json())
      .then((result) => setServiceListItems(result))
  }, [])
  const changeStatus = ({ target: { value: statusValue } }, id) => {
    fetch(`https://evening-meadow-35328.herokuapp.com/getOrder/${id}`)
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          fetch('https://evening-meadow-35328.herokuapp.com/updateOrderStatus', {
            method: 'PATCH',
            body: JSON.stringify({ ...result, status: statusValue }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) alert('Your setting have been updated!')
            })
        }
      })
  }
  return (
    <table className="table table-borderless bg-white p-2 mt-5 rounded">
      <thead>
        <tr style={{ background: '#f5f6fa' }} className="rounded">
          <td>Name</td>
          <td>Email ID</td>
          <td>Service</td>
          <td>Project Details</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        {serviceListItems.map((listItem) => (
          <tr key={listItem._id}>
            <td>{listItem.name}</td>
            <td>{listItem.email}</td>
            <td>{listItem.projectName}</td>
            <td>{listItem.projectDetails}</td>
            <td>
              <select
                style={{ border: '0' }}
                onChange={(e) => changeStatus(e, listItem._id)}
                defaultValue={listItem.status}
                name="status"
              >
                <option value="On Going">On Going</option>
                <option value="Pending">Pending</option>
                <option value="Done">Done</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AdminServiceList
