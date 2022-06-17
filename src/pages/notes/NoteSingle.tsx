import { Container } from '@mui/system';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { Note } from '../../types/note';
import { findNote, updateNote } from '../../repositories/note';
import NoteForm from '../../components/note/NoteForm';
import { NoteFormType } from '../../components/note/NoteForm';

const NoteSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [note, setNote] = useState<Note>();

  const getNote = useCallback(async () => {
    if (!id) {
      setIsLoading(false);
      return;
    }

    findNote(id).then((note) => {
      if (!note) {
        setIsLoading(false);
        return;
      }

      setNote(note);
      setIsLoading(false);
    });
  }, [id]);

  const handleNoteEdit = (note: Note) => {
    updateNote(note).then(() => {
      navigate('/', { replace: true });
    });
  };

  useEffect(() => {
    getNote();
  }, []);

  if (!note && !isLoading) {
    return <Navigate to="/" />;
  }

  return (
    <div className="page page--note-single">
      {note && (
        <section>
          <Container>
            <NoteForm formType={NoteFormType.Edit} note={note} onNoteEdit={handleNoteEdit} />
          </Container>
        </section>
      )}
    </div>
  );
};

export default NoteSingle;
