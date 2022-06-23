import React from 'react';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import Home from '../pages/Home';
import NoteArchive from '../pages/notes/NoteArchive';
import NoteSingle from '../pages/notes/NoteSingle';

interface IAppRoutes {
  path: string;
  element: React.ReactNode;
  isPrivate: boolean;
}

const appRoutes: Array<IAppRoutes> = [
  {
    path: '/',
    element: <Home />,
    isPrivate: false
  },
  {
    path: '/notes',
    element: <NoteArchive />,
    isPrivate: true
  },
  {
    path: '/notes/:id',
    element: <NoteSingle />,
    isPrivate: true
  },
  {
    path: '/sign-in',
    element: <SignIn />,
    isPrivate: false
  },
  {
    path: '/sign-up',
    element: <SignUp />,
    isPrivate: false
  }
];

export { appRoutes };
