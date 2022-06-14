import { Container } from '@mui/system';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { find } from '../../api/notes';
import { useCallback, useEffect, useState } from 'react';
import { Note } from '../../types/note';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { updateNote } from '../../repositories/note';
import NoteForm from '../../components/note/NoteForm';
import { NoteFormType } from '../../components/note/NoteForm';

const NoteSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState<Note>();

  const getNote = useCallback(
    async (id: string | undefined) => {
      if (!id) {
        return;
      }

      await find(id).then((note) => {
        if (!note) {
          return;
        }

        setNote(note);
        setIsLoading(false);
      });
    },
    [id]
  );

  const handleNoteEdit = (note: Note) => {
    updateNote(note).then(() => {
      navigate('/', { replace: true });
    });
  };

  useEffect(() => {
    getNote(id);
  }, []);

  if (!note && !isLoading) {
    return <Navigate to="/" />;
  }

  return (
    <div className="page page--note-single">
      <section>
        <Container>
          <Button href="/">
            <ArrowBackIcon />
            Back
          </Button>

          {note && (
            <NoteForm formType={NoteFormType.Edit} note={note} onNoteEdit={handleNoteEdit} />
          )}
        </Container>
      </section>
    </div>
  );
};

export default NoteSingle;
