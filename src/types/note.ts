export interface Note {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

export interface NoteListItemProps {
  note: Note;
}
