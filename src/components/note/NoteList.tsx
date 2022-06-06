import { Grid } from '@mui/material';

import { notes } from '../../data/notes';
import NoteListItem from './NoteListItem';

const NoteList = () => {
  return (
    <Grid container spacing={3}>
      {notes.map((note) => {
        return (
          <Grid key={note.id} item xs={4}>
            <NoteListItem note={note} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NoteList;
