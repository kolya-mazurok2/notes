import { Note } from '../types/note';

export const notes: Array<Note> = [
  {
    id: 'a1',
    title: 'First note',
    description: '',
    createdAt: new Date(2022, 6, 1)
  },
  {
    id: 'a2',
    title: 'Second note',
    description: 'Lorem ipsum',
    createdAt: new Date(2022, 6, 2)
  },
  {
    id: 'a3',
    title: 'Third note',
    description: 'Lorem ipsum',
    createdAt: new Date(2022, 6, 3)
  },
  {
    id: 'a4',
    title: 'Fourth note',
    description: 'Lorem ipsum',
    createdAt: new Date(2022, 6, 3)
  }
];
