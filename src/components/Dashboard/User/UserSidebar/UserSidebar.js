import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartPlus,
  faList,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

const UserSidebar = ({ setChangeComponent }) => {
  const cursorPointer = { cursor: 'pointer' }
  return (
    <ul className="list-unstyled ml-5 mt-5">
      <li
        style={cursorPointer}
        onClick={() => setChangeComponent('order')}
        className="mb-3 text-black-50"
      >
        <span className="mr-2">
          <FontAwesomeIcon icon={faCartPlus} />
        </span>{' '}
        <span>Order</span>
      </li>
      <li
        style={cursorPointer}
        onClick={() => setChangeComponent('userServiceList')}
        className="mb-3 text-black-50"
      >
        <span className="mr-2">
          <FontAwesomeIcon icon={faList} />
        </span>{' '}
        <span>Service list</span>
      </li>
      <li
        style={cursorPointer}
        onClick={() => setChangeComponent('review')}
        className="mb-3 text-black-50"
      >
        <span className="mr-2">
          <FontAwesomeIcon icon={faComment} />
        </span>{' '}
        <span>Review</span>
      </li>
    </ul>
  )
}

export default UserSidebar
