import { Container } from '@mui/system';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteCreateForm from '../components/note/NoteCreateForm';
import NoteList from '../components/note/NoteList';
import { createNote, findAllNotes, removeNote } from '../repositories/note';
import { Note, NoteCreate } from '../types/note';

const Home = () => {
  const [notes, setNotes] = useState<Array<Note>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const getNotes = useCallback(async () => {
    const notes = await findAllNotes();

    setNotes(notes);
    setIsLoading(false);
  }, []);

  const handleNoteCreate = (note: NoteCreate) => {
    createNote(note).then(() => {
      getNotes();
    });
  };

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

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="page page--home">
      <section>
        <Container>
          <h1>My notes</h1>

          {!isLoading && (
            <NoteList notes={notes} onNoteEdit={handleNoteEdit} onNoteDelete={handleNoteDelete} />
          )}

          <NoteCreateForm onNoteCreate={handleNoteCreate} />
        </Container>
      </section>
    </div>
  );
};

export default Home;
