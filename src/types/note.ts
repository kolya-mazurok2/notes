export interface Note {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

export interface NoteCreate {
  title: string;
  description: string;
  createdAt: Date;
}
