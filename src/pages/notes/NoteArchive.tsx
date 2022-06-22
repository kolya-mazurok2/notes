import { LinearProgress } from '@mui/material';
import { Container } from '@mui/system';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewNote from '../../components/note/NewNote';
import NoteList from '../../components/note/NoteList';
import { UserContext } from '../../context/UserProvider';
import { createNote, findAllNotes, removeNote } from '../../repositories/note';
import { Note, NoteCreate } from '../../types/note';

const NoteArchive = () => {
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
    removeNote(id).then(() => {
      const tempNotes = [...notes].filter((tempNote) => {
        return tempNote.id !== id;
      });

      setNotes(tempNotes);
    });
  };

  const handleNoteCreate = (note: NoteCreate) => {
    createNote(note).then(() => {
      getNotes();
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
