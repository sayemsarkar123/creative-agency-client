import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LoginContext } from '../../../App';

const Header = () => {
  const [userLog, setUserLog] = useContext(LoginContext);
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="#">
      <img style={{maxWidth: '150px'}} src="https://i.ibb.co/VNQvqry/logo.png" alt=""/>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav align-items-center ml-auto">
      <li className="nav-item active mr-4">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item mr-4">
        <Link className="nav-link" to="#">Our Portfolio</Link>
      </li>
      <li className="nav-item mr-4">
        <Link className="nav-link" to="#">Our Team</Link>
      </li>
      <li className="nav-item mr-4">
        <Link className="nav-link" to="#">Contact Us</Link>
      </li>
      <li className="nav-item">
            {
              userLog.isSignIn
                ? <button onClick={() => {
                  setUserLog({});
                  sessionStorage.removeItem('token');
                }} style={{background: '#10132f'}} className="btn text-white">Logout</button>
                : <button onClick={() => history.push('/login')} style={{background: '#10132f'}} className="btn text-white">Login</button>
        }
      </li>
    </ul>
  </div>
</nav>
  );
};

export default Header;