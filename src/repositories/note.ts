import { DocumentData, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import { secondsToDate } from '../helpers/date';
import {
  createNoteDoc,
  findAllFeaturedNoteDocs,
  findAllNoteDocs,
  findNoteDoc,
  removeNoteDoc,
  updateNoteDoc
} from '../services/firestore/note';
import { Note, NoteCreate, NOTE_DEFAULT } from '../types/note';

const generateNoteFromDoc = (doc: QueryDocumentSnapshot<DocumentData>): Note => {
  const docProps = doc.data();

  return {
    ...NOTE_DEFAULT,
    ...docProps,
    id: doc.id,
    createdAt: secondsToDate(docProps.createdAt.seconds)
  };
};

const generateNotesFromDocs = (docs: QuerySnapshot<DocumentData>): Array<Note> => {
  const notes: Array<Note> = [];

  docs.forEach((doc) => {
    notes.push(generateNoteFromDoc(doc));
  });

  return notes;
};

const findAllNotes = async (): Promise<Array<Note>> => {
  const docs = await findAllNoteDocs();

  return generateNotesFromDocs(docs);
};

const findAllFeaturedNotes = async (): Promise<Array<Note>> => {
  const docs = await findAllFeaturedNoteDocs();

  return generateNotesFromDocs(docs);
};

const findNote = async (id: string): Promise<Note | null> => {
  const doc = await findNoteDoc(id);

  if (!doc.exists()) {
    return null;
  }

  return generateNoteFromDoc(doc);
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

export { findAllNotes, findNote, removeNote, createNote, updateNote, findAllFeaturedNotes };
