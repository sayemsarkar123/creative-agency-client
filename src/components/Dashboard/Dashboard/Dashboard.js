import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LoginContext } from '../../../App'
import Admin from '../Admin/Admin/Admin'
import User from '../User/User/User'

const Dashboard = () => {
  const { id } = useParams()
  const [service, setService] = useState({})
  const [userRole, setUserRole] = useState(false)
  const [userLog, setUserLog] = useContext(LoginContext)
  useEffect(() => {
    fetch(`https://evening-meadow-35328.herokuapp.com/checkUserRole/?email=${userLog.email}`)
      .then((response) => response.json())
      .then((result) => setUserRole(result))
  }, [userLog])
  useEffect(() => {
    fetch(`https://evening-meadow-35328.herokuapp.com/getService/${id}`)
      .then((response) => response.json())
      .then((result) => setService(result))
  }, [id])
  return <>{userRole ? <Admin></Admin> : <User service={service}></User>}</>
}

export default Dashboard
