import { Card, CardContent, CardHeader, Typography, CardActions, Button } from '@mui/material';
import { Note } from '../../types/note';

interface INoteListItemProps {
  note: Note;
  onNoteItemEdit(id: string): void;
  onNoteItemDelete(id: string): void;
}

const NoteListItem = ({ note, onNoteItemEdit, onNoteItemDelete }: INoteListItemProps) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <CardHeader title={note.title} />

        {note.description && <Typography variant="body2">{note.description}</Typography>}

        <Typography variant="subtitle2" align="right">
          {note.createdAt.toLocaleDateString()}
        </Typography>

        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              onNoteItemEdit(note.id);
            }}>
            Edit
          </Button>

          <Button
            size="small"
            color="error"
            onClick={() => {
              onNoteItemDelete(note.id);
            }}>
            Delete
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default NoteListItem;
