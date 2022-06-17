import { Link } from '@mui/material';
import { Container } from '@mui/system';

const Header = () => {
  return (
    <header className="header header--main">
      <Container>
        <nav className="main-menu">
          <Link className="main-menu--item" href="/">
            Home
          </Link>

          <Link className="main-menu--item" href="/notes">
            Notes
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
