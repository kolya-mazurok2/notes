import { appRoutes } from './routes';
import { Route } from 'react-router-dom';
import Protected from '../components/routing/Protected';

const appRouteElements = appRoutes.map(({ path, element, isPrivate }, index) => {
  return (
    <Route
      key={index}
      path={path}
      element={isPrivate ? <Protected>{element}</Protected> : element}
    />
  );
});

export { appRouteElements };
