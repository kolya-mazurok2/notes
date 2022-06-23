import { BrowserRouter, Routes } from 'react-router-dom';
import { appRouteElements } from './routing';
import Header from './components/UI/Header';
import Toaster from './components/UI/Toaster';

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
