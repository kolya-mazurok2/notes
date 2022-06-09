import { Container } from '@mui/system';
import { useParams, Navigate } from 'react-router-dom';
import NoteEditForm from '../components/note/NoteEditForm';
import { find } from '../api/notes';
import { useEffect, useState } from 'react';
import { Note } from '../types/note';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NoteSingle = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState<Note | null>();

  useEffect(() => {
    const getNote = async (id: string | undefined) => {
      await find(id).then((note) => {
        setNote(note);
        setIsLoading(false);
      });
    };

    getNote(id);
  }, []);

  if (!note && !isLoading) {
    return <Navigate to="/" />;
  }

  const markup = note ? <NoteEditForm note={note} /> : '';

  return (
    <div className="page page--note-single">
      <section>
        <Container>
          <Button href="/">
            <ArrowBackIcon />
            Back
          </Button>

          {markup}
        </Container>
      </section>
    </div>
  );
};

export default NoteSingle;
