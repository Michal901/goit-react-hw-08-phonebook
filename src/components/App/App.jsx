import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Contacts from '../Contact/Contacts';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<PrivateRoute />}>
          <Route index element={<Contacts />} />
        </Route>
        <Route path="*" element={<Navigate to="/contacts" />} />
      </Routes>
    </Router>
  );
};
