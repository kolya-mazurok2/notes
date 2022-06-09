import { appRoutes } from './routes';
import { Route } from 'react-router-dom';

const appRouteElements = appRoutes.map(({ path, element }, index) => {
  return <Route key={index} path={path} element={element} />;
});

export { appRouteElements };
