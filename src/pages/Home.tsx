import { Container } from '@mui/system';
import NoteList from '../components/note/NoteList';

const Home = () => {
  return (
    <div className="page page--home">
      <section>
        <Container>
          <h1>My notes</h1>

          <NoteList />
        </Container>
      </section>
    </div>
  );
};

export default Home;
