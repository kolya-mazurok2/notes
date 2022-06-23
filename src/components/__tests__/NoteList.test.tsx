import renderer from 'react-test-renderer';
import NoteList from '../note/NoteList';

it('should render an empty message when no notes', () => {
  const element = renderer
    .create(<NoteList notes={[]} onNoteDelete={() => {}} onNoteEdit={() => {}} />)
    .toJSON();

  expect(element).toMatchSnapshot();
});

it('should render multiple notes', () => {
  const notes = [
    {
      id: 'a1',
      title: 'First',
      description: 'Lorem ipsum',
      createdAt: new Date(1655350750000)
    },
    {
      id: 'a2',
      title: 'Second',
      description: '',
      createdAt: new Date(1655350750000)
    }
  ];

  const element = renderer
    .create(<NoteList notes={notes} onNoteDelete={() => {}} onNoteEdit={() => {}} />)
    .toJSON();

  expect(element).toMatchSnapshot();
});
