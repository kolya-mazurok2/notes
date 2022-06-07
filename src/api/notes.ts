import {
  collection,
  query,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  addDoc,
  updateDoc
} from 'firebase/firestore';
import { db } from '../firebase';
import { Note, NoteCreate } from '../types/note';

export const findAll = async () => {
  const ref = collection(db, 'notes');
  const notesQuery = query(ref);

  const querySnapshot = await getDocs(notesQuery);

  const notes: Array<Note> = [];
  querySnapshot.forEach((doc) => {
    let data = doc.data();

    notes.push({
      id: doc.id,
      title: data.title,
      description: data.description,
      createdAt: new Date(data.createdAt.seconds * 1000)
    });
  });

  return await new Promise<Array<Note>>((resolve) => {
    resolve(notes);
  });
};

export const find = async (id: string | undefined) => {
  if (!id) {
    return null;
  }

  const ref = doc(db, 'notes', id);
  const snapshot = await getDoc(ref);

  return await new Promise<Note | null>((resolve) => {
    if (!snapshot.exists()) {
      resolve(null);
    }

    const data = { ...snapshot.data() };
    if (!data) {
      resolve(null);
    }

    resolve({
      id: snapshot.id,
      title: data.title,
      description: data.description,
      createdAt: new Date(data.createdAt.seconds * 1000)
    });
  });
};

export const remove = async (id: string) => {
  const ref = doc(db, 'notes', id);
  await deleteDoc(ref);
};

export const create = async (note: NoteCreate) => {
  const ref = collection(db, 'notes');

  await addDoc(ref, note);
};

export const update = async (note: Note) => {
  const ref = doc(db, 'notes', note.id);

  await updateDoc(ref, {
    title: note.title,
    description: note.description
  });
};
