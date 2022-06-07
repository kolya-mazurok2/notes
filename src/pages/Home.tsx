import { Container } from '@mui/system';
import NoteFeed from '../components/note/NoteFeed';

const Home = () => {
  return (
    <div className="page page--home">
      <section>
        <Container>
          <h1>My notes</h1>

          <NoteFeed />
        </Container>
      </section>
    </div>
  );
};

export default Home;
