import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import React, { FormEvent, useState } from 'react';
import { Button, FormControl, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NoteCreate } from '../../types/note';

interface INoteCreateFormProps {
  onNoteCreate: (note: NoteCreate) => void;
}

const NoteCreateForm = ({ onNoteCreate }: INoteCreateFormProps) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [titleIsValid, setTitleIsValid] = useState(false);
  const [description, setDescription] = useState('');

  const toggleShowFormClickHandler = () => {
    setShowForm(!showForm);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!titleIsValid) {
      return;
    }

    onNoteCreate({
      title,
      description,
      createdAt: new Date()
    });
  };

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setTitle(value);

    const isValid = value.length > 0;
    setTitleIsValid(isValid);
  };

  const descriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setDescription(value);
  };

  const iconMarkup = showForm ? <ClearIcon /> : <AddIcon />;

  return (
    <Box component="div" padding={2}>
      <IconButton color="primary" size="large" onClick={toggleShowFormClickHandler}>
        {iconMarkup}
      </IconButton>

      {showForm && (
        <Box
          component="form"
          noValidate
          autoComplete="off"
          padding={2}
          onSubmit={formSubmitHandler}>
          <Typography variant="h4">Add new note</Typography>

          <FormControl fullWidth margin="normal">
            <TextField
              id="title"
              label="Title"
              variant="outlined"
              onChange={titleChangeHandler}
              error={!titleIsValid}
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
            />
          </FormControl>

          <FormControl margin="normal">
            <Button variant="contained" type="submit">
              Add
            </Button>
          </FormControl>
        </Box>
      )}
    </Box>
  );
};

export default NoteCreateForm;
