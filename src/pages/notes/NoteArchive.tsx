import { Container } from '@mui/system';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewNote from '../../components/note/NewNote';
import NoteList from '../../components/note/NoteList';
import { createNote, findAllNotes, removeNote } from '../../repositories/note';
import { Note, NoteCreate } from '../../types/note';

const NoteArchive = () => {
  const [notes, setNotes] = useState<Array<Note>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const getNotes = useCallback(async () => {
    const notes = await findAllNotes();

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
