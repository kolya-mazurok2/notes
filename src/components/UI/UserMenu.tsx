import { Button, ButtonGroup } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import { signOut } from '../../services/firestore/auth';

const UserMenu = () => {
  const { user } = useContext(UserContext);

  const signOutClickHandler = () => {
    signOut();
  };

  return (
    <div className="user-menu">
      <ButtonGroup>
        {user ? (
          <Button variant="contained" onClick={signOutClickHandler}>
            Sign out
          </Button>
        ) : (
          <Button variant="contained" href="/sign-in">
            Sign in
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
};

export default UserMenu;
