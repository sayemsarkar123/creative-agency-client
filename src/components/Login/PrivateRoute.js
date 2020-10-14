import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LoginContext } from '../../App';
import jwt_decode from 'jwt-decode';

const PrivateRoute = ({ children, ...rest }) => {
  const [userLog, setUserLog] = useContext(LoginContext);
  const checkAuthToken = () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const { name, email, picture, exp } = jwt_decode(token);
      if (exp < (~~(Date.now() / 1000))) return false;
      if (!userLog.isSignIn) setUserLog({ isSignIn: true, name, email, picture });
      return true;
    }
  };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userLog.isSignIn || checkAuthToken() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
