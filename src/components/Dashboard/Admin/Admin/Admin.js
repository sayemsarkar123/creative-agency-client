import React, { useState } from 'react';
import DashbordHeader from '../../DashbordHeader/DashbordHeader';
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const Admin = () => {
  const [changeComponent, setChangeComponent] = useState('adminServiceList');
  return (
    <>
      <DashbordHeader changeComponent={changeComponent}></DashbordHeader>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar setChangeComponent={setChangeComponent}></AdminSidebar>
          </div>
          <div style={{background: '#f4f7fc'}} className="col-md-9 pl-4 pb-5">
            {
              changeComponent === 'adminServiceList'
                ? <AdminServiceList></AdminServiceList>
                : changeComponent === 'addService'
                  ? <AddService></AddService>
                  : changeComponent === 'addAdmin'
                    ? <AddAdmin></AddAdmin>
                    : null
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;