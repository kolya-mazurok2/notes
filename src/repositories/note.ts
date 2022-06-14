import {
  createNoteDoc,
  findAllNoteDocs,
  findNoteDoc,
  removeNoteDoc,
  updateNoteDoc
} from '../services/firestore/note';
import { Note, NoteCreate } from '../types/note';

const findAllNotes = async (): Promise<Array<Note>> => {
  const notes: Array<Note> = [];
  const docs = await findAllNoteDocs();

  docs.forEach((doc) => {
    let docProps = doc.data();

    notes.push({
      id: doc.id,
      title: docProps.title,
      description: docProps.description,
      createdAt: new Date(docProps.createdAt.seconds * 1000)
    });
  });

  return notes;
};

const findNote = async (id: string): Promise<Note | null> => {
  const doc = await findNoteDoc(id);

  if (!doc.exists()) {
    return null;
  }

  const docProps = doc.data();

  return {
    id: doc.id,
    title: docProps.title,
    description: docProps.description,
    createdAt: new Date(docProps.createdAt.seconds * 1000)
  };
};

const removeNote = (id: string) => {
  return removeNoteDoc(id);
};

const createNote = (note: NoteCreate) => {
  return createNoteDoc(note);
};

const updateNote = (note: Note) => {
  return updateNoteDoc(note);
};

export { findAllNotes, findNote, removeNote, createNote, updateNote };
