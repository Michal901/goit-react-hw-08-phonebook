import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <nav>
      {!isLoggedIn && (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
      {isLoggedIn && (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          <button onClick={handleLogout}>Log Out</button>
        </>
      )}
    </nav>
  );
};

export default Navigation;
