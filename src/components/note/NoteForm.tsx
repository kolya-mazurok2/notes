import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserProvider';
import useCheckbox from '../../hooks/useCheckbox';
import useInput from '../../hooks/useInput';
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

const NoteForm = ({ formType, note, onNoteCreate, onNoteEdit }: NoteFormProps) => {
  const { user } = useContext(UserContext);

  const [isEdit, setIsEdit] = useState(false);

  const {
    enteredValue: title,
    isTouched: titleIsTouched,
    isValid: titleIsValid,
    setEnteredValue: setTitle,
    handleChange: titleChangeHandler,
    handleBlur: titleBlurHandler,
    reset: resetTitle
  } = useInput((value) => {
    return value.length > 1;
  });
  const titleHasError = !titleIsValid && titleIsTouched;

  const {
    enteredValue: description,
    setEnteredValue: setDescription,
    handleChange: descriptionChangeHandler,
    reset: resetDescription
  } = useInput();

  const {
    enteredValue: isFeatured,
    setEnteredValue: setIsFeatured,
    handleChange: isFeaturedChangeHandler,
    reset: resetIsFeatured
  } = useCheckbox();

  const {
    enteredValue: isPublic,
    setEnteredValue: setIsPublic,
    handleChange: isPublicChangeHandler,
    reset: resetIsPublic
  } = useCheckbox();

  const getFormFields = () => {
    return {
      title: title,
      description: description,
      isFeatured: isFeatured,
      isPublic: isPublic
    };
  };

  const submitEdit = () => {
    if (!note || !onNoteEdit) {
      return;
    }

    onNoteEdit({
      ...note,
      ...getFormFields()
    });
  };

  const submitCreate = () => {
    if (!onNoteCreate) {
      return;
    }

    onNoteCreate({
      ...getFormFields(),
      authorId: user ? user.uid : '',
      createdAt: new Date()
    });

    resetTitle();
    resetDescription();
    resetIsFeatured();
    resetIsPublic();
  };

  const formSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!titleIsValid) {
      return;
    }

    isEdit ? submitEdit() : submitCreate();
  };

  useEffect(() => {
    if (formType === NoteFormType.Edit && note) {
      setIsEdit(true);

      setTitle(note.title);
      setDescription(note.description);
      setIsFeatured(note.isFeatured);
      setIsPublic(note.isPublic);
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
          value={title}
          onChange={(event) => {
            titleChangeHandler(event.currentTarget.value);
          }}
          onBlur={titleBlurHandler}
          error={titleHasError}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <TextField
          id="description"
          label="Description"
          multiline
          rows={6}
          variant="outlined"
          value={description}
          onChange={(event) => {
            descriptionChangeHandler(event.currentTarget.value);
          }}
        />
      </FormControl>

      <FormControl margin="normal">
        <FormControlLabel
          control={<Checkbox checked={isFeatured} />}
          label="Featured"
          onChange={(event) => {
            const target = event.target as HTMLInputElement;
            isFeaturedChangeHandler(target.checked);
          }}
        />

        <FormControlLabel
          control={<Checkbox checked={isPublic} />}
          label="Public"
          onChange={(event) => {
            const target = event.target as HTMLInputElement;
            isPublicChangeHandler(target.checked);
          }}
        />
      </FormControl>

      <br />

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
