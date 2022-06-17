import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { dateFormatDefault } from '../../helpers/date';
import { Note } from '../../types/note';

interface INoteListItemProps {
  note: Note;
  onNoteItemEdit?: (id: string) => void;
  onNoteItemDelete?: (id: string) => void;
}

const NoteListItem = ({ note, onNoteItemEdit, onNoteItemDelete }: INoteListItemProps) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">{note.title}</Typography>

        {note.description && <Typography variant="body2">{note.description}</Typography>}

        <Typography variant="subtitle2" align="right">
          {dateFormatDefault(note.createdAt)}
        </Typography>

        {onNoteItemEdit && onNoteItemDelete && (
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
        )}
      </CardContent>
    </Card>
  );
};

export default NoteListItem;
