import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
// import { getUser } from '../../redux/auth/selectors';

import { getUserEmail } from '../../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

  return (
    <div>
      <p>{email}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};

export default UserMenu;
