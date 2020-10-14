import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = ({ setChangeComponent }) => {
  const cursorPointer = {cursor: 'pointer'}
  return (
    <ul className="list-unstyled ml-5 mt-5">
      <li style={cursorPointer} onClick={() => setChangeComponent('adminServiceList')} className="mb-3 text-black-50"><span className="mr-2"><FontAwesomeIcon icon={faList} /></span> <span>Service list</span></li>
      <li style={cursorPointer} onClick={() => setChangeComponent('addService')} className="mb-3 text-black-50"><span className="mr-2"><FontAwesomeIcon icon={faPlus} /></span> <span>Add Service</span></li>
      <li style={cursorPointer} onClick={() => setChangeComponent('addAdmin')} className="mb-3 text-black-50"><span className="mr-2"><FontAwesomeIcon icon={faUser} /></span> <span>Make Admin</span></li>
    </ul>
  );
};

export default AdminSidebar;