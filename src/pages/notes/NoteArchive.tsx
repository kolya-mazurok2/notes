import { LinearProgress } from '@mui/material';
import { Container } from '@mui/system';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NewNote from '../../components/note/NewNote';
import NoteList from '../../components/note/NoteList';
import { UserContext } from '../../context/UserProvider';
import { createNote, findAllNotes, removeNote } from '../../repositories/note';
import { openToaster } from '../../store/slices/toasterSlice';
import { Note, NoteCreate } from '../../types/note';

const NoteArchive = () => {
  const dispatch = useDispatch();

  const { user } = useContext(UserContext);
  const uid = useMemo(() => (user ? user.uid : ''), [user]);

  const [notes, setNotes] = useState<Array<Note>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const getNotes = useCallback(async () => {
    const notes = await findAllNotes(uid);

    setNotes(notes);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getNotes();
  }, []);

  const handleNoteEdit = (id: string) => {
    navigate(`/notes/${id}`);
  };

  const handleNoteDelete = (id: string) => {
    removeNote(id)
      .then(() => {
        dispatch(
          openToaster({ severity: 'success', message: 'The note has been successfully removed!' })
        );

        const tempNotes = [...notes].filter((tempNote) => {
          return tempNote.id !== id;
        });

        setNotes(tempNotes);
      })
      .catch(() => {
        dispatch(openToaster({ severity: 'error', message: '' }));
      });
  };

  const handleNoteCreate = (note: NoteCreate) => {
    createNote(note)
      .then(() => {
        dispatch(openToaster({ severity: 'success', message: 'Successfully added a new note!' }));

        getNotes();
      })
      .catch(() => {
        dispatch(openToaster({ severity: 'error', message: '' }));
      });
  };

  return (
    <div className="page page--note-archive">
      {isLoading && <LinearProgress />}

      <section>
        <Container>
          <h1>All notes</h1>

          {!isLoading && (
            <NoteList notes={notes} onNoteEdit={handleNoteEdit} onNoteDelete={handleNoteDelete} />
          )}

          <NewNote onNoteCreate={handleNoteCreate} />
        </Container>
      </section>
    </div>
  );
};

export default NoteArchive;
