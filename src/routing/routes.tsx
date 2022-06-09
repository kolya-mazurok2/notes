import React from 'react';
import Home from '../pages/Home';
import NoteSingle from '../pages/NoteSingle';

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
    path: '/notes/:id',
    element: <NoteSingle />
  }
];

export { appRoutes };
