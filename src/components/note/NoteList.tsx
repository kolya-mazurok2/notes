import { Grid, Typography } from '@mui/material';
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
      {!notes.length && (
        <Grid item xs={12}>
          <Typography variant="h6">No notes have been added yet!</Typography>
        </Grid>
      )}

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
