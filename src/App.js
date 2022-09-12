import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { CatalogPage } from './pages/CatalogPage/CatalogPage.jsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/catalog' element={ <CatalogPage /> }/>
        <Route path='*' element={ <ErrorPage /> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;