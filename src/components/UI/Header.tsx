import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import MainMenu from './MainMenu';
import UserMenu from './UserMenu';

const Header = () => {
  return (
    <header className="header header--main">
      <Container>
        <Grid container>
          <Grid item xs={8}>
            <MainMenu />
          </Grid>

          <Grid item xs={4}>
            <UserMenu />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
