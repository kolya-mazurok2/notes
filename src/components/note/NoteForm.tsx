import { Button, FormControl, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FormEvent, useEffect, useState } from 'react';
import { Note, NoteCreate } from '../../types/note';

enum NoteFormType {
  Edit,
  Create
}

interface NoteFormProps {
  formType: NoteFormType;
  note?: Note;
  onNoteCreate?: (note: NoteCreate) => void;
  onNoteEdit?: (note: Note) => void;
}

interface NoteFormFields {
  title: string;
  description: string;
}

interface NoteFormFieldsValidity {
  isTitleValid: boolean;
}

const DEFAULT_NOTE_FORM_FIELDS: NoteFormFields = {
  title: '',
  description: ''
};

const NOTE_FORM_FIELDS_VALIDITY_VALID: NoteFormFieldsValidity = {
  isTitleValid: true
};

const NOTE_FORM_FIELDS_VALIDITY_INVALID: NoteFormFieldsValidity = {
  isTitleValid: false
};

const NoteForm = ({ formType, note, onNoteCreate, onNoteEdit }: NoteFormProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const [formFields, setFormFields] = useState<NoteFormFields>(DEFAULT_NOTE_FORM_FIELDS);
  const [formFieldsValidity, setFormFieldsValidity] = useState<NoteFormFieldsValidity>(
    NOTE_FORM_FIELDS_VALIDITY_INVALID
  );

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!formFieldsValidity.isTitleValid) {
      return;
    }

    if (isEdit) {
      if (note && onNoteEdit) {
        onNoteEdit({
          ...note,
          ...formFields
        });
      }
    } else {
      if (onNoteCreate) {
        onNoteCreate({
          ...formFields,
          createdAt: new Date()
        });
      }
    }
  };

  const titleChangeHandler = (value: string) => {
    setFormFields({ ...formFields, title: value });

    setFormFieldsValidity({
      ...formFieldsValidity,
      isTitleValid: Boolean(value.length)
    });
  };

  const descriptionChangeHandler = (value: string) => {
    setFormFields({ ...formFields, description: value });
  };

  useEffect(() => {
    if (formType === NoteFormType.Edit && note) {
      setIsEdit(true);

      setFormFields({
        title: note.title,
        description: note.description
      });

      setFormFieldsValidity(NOTE_FORM_FIELDS_VALIDITY_VALID);
    }
  }, []);

  return (
    <Box component="form" noValidate autoComplete="off" padding={2} onSubmit={formSubmitHandler}>
      <Typography variant="h4">{isEdit ? 'Edit' : 'Create'} note</Typography>

      <FormControl fullWidth margin="normal">
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          value={formFields.title}
          onChange={(event) => {
            titleChangeHandler(event.currentTarget.value);
          }}
          error={!formFieldsValidity.isTitleValid}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          id="description"
          label="Description"
          multiline
          rows={6}
          variant="outlined"
          value={formFields.description}
          onChange={(event) => {
            descriptionChangeHandler(event.currentTarget.value);
          }}
        />
      </FormControl>

      <FormControl margin="normal">
        <Button variant="contained" type="submit">
          {isEdit ? 'Update' : 'Add'}
        </Button>
      </FormControl>
    </Box>
  );
};

export default NoteForm;

export { NoteFormType };
