import { Link } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../../context/UserProvider';

const MainMenu = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="main-menu">
      <Link className="main-menu--item" href="/">
        Home
      </Link>

      {user && (
        <Link className="main-menu--item" href="/notes">
          Notes
        </Link>
      )}
    </nav>
  );
};

export default MainMenu;
