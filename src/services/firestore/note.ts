import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc
} from 'firebase/firestore';
import { Note, NoteCreate } from '../../types/note';
import { db } from './config';

const PATH = 'notes';

const findAllNoteDocs = () => {
  const ref = collection(db, PATH);

  return getDocs(query(ref));
};

const findNoteDoc = (id: string) => {
  const ref = doc(db, PATH, id);

  return getDoc(ref);
};

const removeNoteDoc = (id: string) => {
  const ref = doc(db, PATH, id);

  return deleteDoc(ref);
};

const createNoteDoc = (note: NoteCreate) => {
  const ref = collection(db, PATH);

  return addDoc(ref, note);
};

const updateNoteDoc = (note: Note) => {
  const ref = doc(db, 'notes', note.id);

  return updateDoc(ref, {
    title: note.title,
    description: note.description
  });
};

export { findAllNoteDocs, findNoteDoc, removeNoteDoc, createNoteDoc, updateNoteDoc };
