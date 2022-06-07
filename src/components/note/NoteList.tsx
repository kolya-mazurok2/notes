import { Grid } from '@mui/material';
import NoteListItem from './NoteListItem';
import * as NOTES_API from '../../api/notes';
import { useEffect, useState } from 'react';
import { Note, NoteListProps } from '../../types/note';

const NoteList = (props: NoteListProps) => {
  const [notes, setNotes] = useState<Note[]>(props.notes);

  const deleteNote = (id: string) => {
    NOTES_API.remove(id).then(() => {
      setNotes(
        notes.filter((note) => {
          return note.id !== id;
        })
      );
    });
  };

  useEffect(() => {
    setNotes(props.notes);
  }, [props.notes]);

  return (
    <Grid container spacing={3}>
      {notes.map((note) => {
        return (
          <Grid key={note.id} item xs={4}>
            <NoteListItem note={note} itemDeleteCallback={deleteNote} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NoteList;
