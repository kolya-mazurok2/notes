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

export interface NoteListProps {
  notes: Array<Note>;
}

export interface NoteListItemProps {
  note: Note;
  itemDeleteCallback(id: string): void;
}

export interface NoteEditFormProps {
  note: Note;
}

export interface NoteCreateFormProps {
  noteCreatedCallback(): void;
}
