import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where
} from 'firebase/firestore';
import { Note, NoteCreate } from '../../types/note';
import { db } from './config';

const PATH = 'notes';

const findAllNoteDocs = () => {
  const ref = collection(db, PATH);

  return getDocs(query(ref, orderBy('createdAt', 'desc')));
};

const findAllFeaturedNoteDocs = () => {
  const ref = collection(db, PATH);

  return getDocs(query(ref, where('isFeatured', '==', true), orderBy('createdAt', 'desc')));
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

  return updateDoc(ref, { ...note });
};

export {
  findAllNoteDocs,
  findNoteDoc,
  removeNoteDoc,
  createNoteDoc,
  updateNoteDoc,
  findAllFeaturedNoteDocs
};
