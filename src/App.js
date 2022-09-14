import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { CatalogPage } from './pages/CatalogPage/CatalogPage.jsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.jsx';
import { RecipePage } from './pages/RecipePage/RecipePage.jsx';
import { Ingredient } from './components/Ingredient/Ingredient.jsx';
import { Instruction } from './components/Instruction/Instruction.jsx';
import { YoutubePlayer } from './components/YoutubePlayer/YoutubePlayer.jsx';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path ='/catalog' element={<HomePage />}/>
        <Route path='/catalog/:categoryName'>
          <Route index element={<CatalogPage />}/>
          <Route path=':recipeName/:id' element={<RecipePage />}>
            <Route path='ingredients' element={<Ingredient />}/>
            <Route path='instructions' element={<Instruction />}/>
            <Route path='video' element={<YoutubePlayer />}/>
          </Route>
        </Route>
        
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}