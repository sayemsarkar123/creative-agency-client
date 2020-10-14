import React, { useState } from 'react';
import { createContext } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';

export const LoginContext = createContext();

const App = () => {
  const [userLog, setUserLog] = useState({});
  return (
    <LoginContext.Provider value={[userLog, setUserLog]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard/:id">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
