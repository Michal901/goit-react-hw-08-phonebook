import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.auth.error);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
