import { Container } from '@mui/system';
import { useParams, Navigate } from 'react-router-dom';
import { notes } from '../data/notes';
import NoteEditForm from '../components/note/NoteEditForm';

const NoteSingle = () => {
  const { id } = useParams();

  const [note] = notes.filter((note) => {
    return note.id === id;
  });

  if (!note) {
    return <Navigate to="/" />;
  }

  return (
    <div className="page page--note-single">
      <section>
        <Container>
          <NoteEditForm note={note} />
        </Container>
      </section>
    </div>
  );
};

export default NoteSingle;
