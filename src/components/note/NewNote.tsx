import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import NoteForm from './NoteForm';
import { NoteFormType } from './NoteForm';
import { NoteCreate } from '../../types/note';

interface NewNoteProps {
  onNoteCreate: (note: NoteCreate) => void;
}

const NewNote = ({ onNoteCreate }: NewNoteProps) => {
  const [showForm, setShowForm] = useState(false);

  const toggleShowFormClickHandler = () => {
    setShowForm(!showForm);
  };

  const handleNoteCreate = (note: NoteCreate) => {
    onNoteCreate(note);
  };

  return (
    <Box component="div" padding={2}>
      <IconButton color="primary" size="large" onClick={toggleShowFormClickHandler}>
        {showForm ? <ClearIcon /> : <AddIcon />}
      </IconButton>

      {showForm && <NoteForm formType={NoteFormType.Create} onNoteCreate={handleNoteCreate} />}
    </Box>
  );
};

export default NewNote;
