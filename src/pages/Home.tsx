import { LinearProgress } from '@mui/material';
import { Container } from '@mui/system';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import NoteList from '../components/note/NoteList';
import { UserContext } from '../context/UserProvider';
import { findAllFeaturedNotes, findAllPublicNotes } from '../repositories/note';
import { Note } from '../types/note';

const Home = () => {
  const { user } = useContext(UserContext);
  const uid = useMemo(() => (user ? user.uid : ''), [user]);

  const [notes, setNotes] = useState<Array<Note>>([]);
  const [communityNotes, setCommunityNotes] = useState<Array<Note>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNotes = useCallback(async () => {
    const notes = await findAllFeaturedNotes(uid);

    setNotes(notes);
  }, []);

  const getCommunityNotes = useCallback(async () => {
    const notes = await findAllPublicNotes();

    setCommunityNotes(notes);
  }, []);

  const loadPageData = () => {
    Promise.all([getNotes(), getCommunityNotes()]).then(() => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    loadPageData();
  }, []);

  return (
    <div className="page page--home">
      {isLoading && <LinearProgress />}

      <section>
        <Container>
          <h1>Community notes</h1>

          {!isLoading && <NoteList notes={communityNotes} />}
        </Container>
      </section>

      {user && (
        <section>
          <Container>
            <h1>Featured notes</h1>

            {!isLoading && <NoteList notes={notes} />}
          </Container>
        </section>
      )}
    </div>
  );
};

export default Home;
