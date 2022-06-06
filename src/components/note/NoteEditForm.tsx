import { Button, FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { NoteEditFormProps } from '../../types/note';

const NoteEditForm = (props: NoteEditFormProps) => {
  const { note } = props;

  return (
    <Box component="form" noValidate autoComplete="off" padding={2}>
      <FormControl fullWidth margin="normal">
        <TextField id="title" label="Title" variant="outlined" value={note.title} />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField id="description" label="Description" multiline rows={6} variant="outlined" />
      </FormControl>

      <FormControl margin="normal">
        <Button variant="contained">Update</Button>
      </FormControl>
    </Box>
  );
};

export default NoteEditForm;
