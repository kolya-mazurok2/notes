export interface Note {
  id: string;
  title: string;
  description: string;
  authorId: string;
  isFeatured: boolean;
  createdAt: Date;
}

export interface NoteCreate {
  title: string;
  description: string;
  authorId: string;
  createdAt: Date;
}

export const NOTE_DEFAULT: Note = {
  id: 'a1',
  title: 'Title',
  description: '',
  authorId: '',
  isFeatured: false,
  createdAt: new Date()
};
