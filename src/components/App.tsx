import { BrowserRouter, Routes } from 'react-router-dom';
import { appRouteElements } from '../routing';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>{appRouteElements}</Routes>
    </BrowserRouter>
  );
};

export default App;
