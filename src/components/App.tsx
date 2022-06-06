import Home from '../pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import NoteSingle from '../pages/NoteSingle';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />

        <Route path={ROUTES.NOTE_SINGLE} element={<NoteSingle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
