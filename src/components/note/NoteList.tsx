import { Grid, Typography } from '@mui/material';
import { Note } from '../../types/note';
import NoteListItem from './NoteListItem';

interface NoteListProps {
  notes: Array<Note>;
  onNoteEdit?: (id: string) => void;
  onNoteDelete?: (id: string) => void;
}

const NoteList = ({ notes, onNoteEdit, onNoteDelete }: NoteListProps) => {
  const handleNoteItemEdit = (id: string) => {
    if (onNoteEdit) {
      onNoteEdit(id);
    }
  };

  const handleNoteItemDelete = (id: string) => {
    if (onNoteDelete) {
      onNoteDelete(id);
    }
  };

  return (
    <Grid container spacing={3} className="note-list">
      {!notes.length && (
        <Grid item xs={12}>
          <Typography variant="h6">No notes have been added yet!</Typography>
        </Grid>
      )}

      {notes.map((note) => {
        return (
          <Grid
            key={note.id}
            item
            xs={12}
            sm={6}
            md={4}
            className={`note-list--item${note.isFeatured ? ' featured' : ''}`}>
            {onNoteEdit && onNoteDelete ? (
              <NoteListItem
                note={note}
                onNoteItemEdit={handleNoteItemEdit}
                onNoteItemDelete={handleNoteItemDelete}
              />
            ) : (
              <NoteListItem note={note} />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NoteList;
