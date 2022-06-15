import { Grid, Typography } from '@mui/material';
import { Note } from '../../types/note';
import NoteListItem from './NoteListItem';

interface NoteListProps {
  notes: Array<Note>;
  onNoteEdit(id: string): void;
  onNoteDelete(id: string): void;
}

const NoteList = ({ notes, onNoteEdit, onNoteDelete }: NoteListProps) => {
  const handleNoteItemEdit = (id: string) => {
    onNoteEdit(id);
  };

  const handleNoteItemDelete = (id: string) => {
    onNoteDelete(id);
  };

  return (
    <Grid container spacing={3}>
      {!notes.length && (
        <Grid item xs={12}>
          <Typography variant="h6">No notes have been added yet!</Typography>
        </Grid>
      )}

      {notes.map((note) => {
        return (
          <Grid key={note.id} item xs={12} sm={6} md={4}>
            <NoteListItem
              note={note}
              onNoteItemEdit={handleNoteItemEdit}
              onNoteItemDelete={handleNoteItemDelete}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NoteList;
