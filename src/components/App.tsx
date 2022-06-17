import { BrowserRouter, Routes } from 'react-router-dom';
import { appRouteElements } from '../routing';
import Header from './UI/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>{appRouteElements}</Routes>
    </BrowserRouter>
  );
};

export default App;
