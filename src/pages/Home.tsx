import { LinearProgress } from '@mui/material';
import { Container } from '@mui/system';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import NoteList from '../components/note/NoteList';
import { UserContext } from '../context/UserProvider';
import { findAllFeaturedNotes } from '../repositories/note';
import { Note } from '../types/note';

const Home = () => {
  const { user } = useContext(UserContext);
  const uid = useMemo(() => (user ? user.uid : ''), [user]);

  const [notes, setNotes] = useState<Array<Note>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNotes = useCallback(async () => {
    const notes = await findAllFeaturedNotes(uid);

    setNotes(notes);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="page page--home">
      {isLoading && <LinearProgress />}

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
