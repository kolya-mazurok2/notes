import { Button, FormControl, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FormEvent, useState } from 'react';
import { NoteEditFormProps } from '../../types/note';
import { update } from '../../api/notes';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const NoteEditForm = (props: NoteEditFormProps) => {
  const { note } = props;

  const [title, setTitle] = useState(note.title);
  const [titleIsValid, setTitleIsValid] = useState(true);
  const [description, setDescription] = useState(note.description);

  const navigate = useNavigate();

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!titleIsValid) {
      return;
    }

    update({ ...note, title, description }).then(() => {
      navigate(ROUTES.HOME, { replace: true });
    });
  };

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setTitle(event.currentTarget.value);

    const isValid = value.length > 0;
    setTitleIsValid(isValid);
  };

  const descriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.currentTarget.value);
  };

  return (
    <Box component="form" noValidate autoComplete="off" padding={2} onSubmit={formSubmitHandler}>
      <Typography variant="h4">Edit note</Typography>

      <FormControl fullWidth margin="normal">
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          onChange={titleChangeHandler}
          error={!titleIsValid}
          value={title}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          id="description"
          label="Description"
          multiline
          rows={6}
          variant="outlined"
          onChange={descriptionChangeHandler}
          value={description}
        />
      </FormControl>

      <FormControl margin="normal">
        <Button variant="contained" type="submit">
          Update
        </Button>
      </FormControl>
    </Box>
  );
};

export default NoteEditForm;
