import { Card, CardContent, CardHeader, Typography, CardActions, Button } from '@mui/material';
import { NoteListItemProps } from '../../types/note';

const NoteListItem = (props: NoteListItemProps) => {
  const { note, itemDeleteCallback } = props;

  const deleteClickHandler = () => {
    itemDeleteCallback(note.id);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <CardHeader title={note.title} />

        {note.description && <Typography variant="body2">{note.description}</Typography>}

        <Typography variant="subtitle2" align="right">
          {note.createdAt.toLocaleDateString()}
        </Typography>

        <CardActions>
          <Button size="small" color="primary" href={'/notes' + `/${note.id}`}>
            Edit
          </Button>

          <Button size="small" color="error" onClick={deleteClickHandler}>
            Delete
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default NoteListItem;
