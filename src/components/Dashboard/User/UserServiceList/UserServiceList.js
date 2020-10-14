import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../../../App';
import UserServiceListItem from '../UserServiceListItem/UserServiceListItem';

const UserServiceList = () => {
  const [userLog, setUserLog] = useContext(LoginContext);
  const [serviceListItems, setServiceListItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/getOrdersByEmail/?email=${userLog.email}`)
      .then(response => response.json())
      .then(result => setServiceListItems(result));
  }, []);
  return (
    <div className="row">
      {
        serviceListItems.length
          ? serviceListItems.map(listItem => <UserServiceListItem key={listItem._id} listItem={listItem}></UserServiceListItem>)
          : <h3 className="m-auto">Loading... Please Wait</h3>
      }
    </div>
  );
};

export default UserServiceList;