import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { NoteListItemProps } from '../../types/note';

const NoteListItem = (props: NoteListItemProps) => {
  const { note } = props;

  return (
    <Card variant="outlined">
      <CardContent>
        <CardHeader title={note.title} />

        {note.description && <Typography variant="body2">{note.description}</Typography>}

        <Typography variant="subtitle2" align="right">
          {note.createdAt.toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteListItem;
