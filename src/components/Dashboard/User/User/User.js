import React, { useState } from 'react';
import DashbordHeader from '../../DashbordHeader/DashbordHeader';
import Order from '../Order/Order';
import Review from '../Review/Review';
import UserServiceList from '../UserServiceList/UserServiceList';
import UserSidebar from '../UserSidebar/UserSidebar';

const User = ({service}) => {
  const [changeComponent, setChangeComponent] = useState('order');
  return (
    <>
      <DashbordHeader changeComponent={changeComponent}></DashbordHeader>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserSidebar setChangeComponent={setChangeComponent}></UserSidebar>
          </div>
          <div style={{background: '#f4f7fc'}} className="col-md-9 pl-4 pb-5">
            {
              changeComponent === 'order'
                ? <Order service={service}></Order>
                : changeComponent === 'userServiceList'
                  ? <UserServiceList></UserServiceList>
                  : changeComponent === 'review'
                    ? <Review></Review>
                    : null
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
