import { BrowserRouter, Routes } from 'react-router-dom';
import { appRouteElements } from '../routing';
import Header from './UI/Header';
import Toaster from './UI/Toaster';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>{appRouteElements}</Routes>

      <Toaster />
    </BrowserRouter>
  );
};

export default App;
