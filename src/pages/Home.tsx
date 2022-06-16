import { Container } from '@mui/system';
import { useCallback, useEffect, useState } from 'react';
import NoteList from '../components/note/NoteList';
import { findAllFeaturedNotes } from '../repositories/note';
import { Note } from '../types/note';

const Home = () => {
  const [notes, setNotes] = useState<Array<Note>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNotes = useCallback(async () => {
    const notes = await findAllFeaturedNotes();

    setNotes(notes);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="page page--home">
      <section>
        <Container>
          <h1>Featured notes</h1>

          {!isLoading && <NoteList notes={notes} />}
        </Container>
      </section>
    </div>
  );
};

export default Home;
