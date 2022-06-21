import React from 'react';
import SignIn from '../pages/auth/SignIn';
import Home from '../pages/Home';
import NoteArchive from '../pages/notes/NoteArchive';
import NoteSingle from '../pages/notes/NoteSingle';

interface IAppRoutes {
  path: string;
  element: React.ReactNode;
}

const appRoutes: Array<IAppRoutes> = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/notes',
    element: <NoteArchive />
  },
  {
    path: '/notes/:id',
    element: <NoteSingle />
  },
  {
    path: '/sign-in',
    element: <SignIn />
  }
];

export { appRoutes };
