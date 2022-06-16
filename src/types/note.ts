export interface Note {
  id: string;
  title: string;
  description: string;
  isFeatured: boolean;
  createdAt: Date;
}

export interface NoteCreate {
  title: string;
  description: string;
  createdAt: Date;
}

export const NOTE_DEFAULT: Note = {
  id: 'a1',
  title: 'Title',
  description: '',
  isFeatured: false,
  createdAt: new Date()
};
