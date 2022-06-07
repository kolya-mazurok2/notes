import { Fragment } from 'react';
import NoteCreateForm from './NoteCreateForm';
import NoteList from './NoteList';
import * as NOTES_API from '../../api/notes';
import { useEffect, useState } from 'react';
import { Note } from '../../types/note';

const NoteFeed = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNotes = async () => {
    await NOTES_API.findAll()
      .then((data) => {
        setNotes(data);
        setIsLoading(false);
      })
      .catch(() => {});
  };

  const noteCreatedCallbackHandler = () => {
    getNotes();
  };

  useEffect(() => {
    getNotes();
  }, []);

  console.log(notes);

  return (
    <Fragment>
      {!isLoading && <NoteList notes={notes} />}

      <NoteCreateForm noteCreatedCallback={noteCreatedCallbackHandler} />
    </Fragment>
  );
};

export default NoteFeed;
