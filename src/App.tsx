import React from 'react';
import './assets/styles/scss/index.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/home';
import ArticlePage from './pages/article';
import LatestNewsPage from './pages/latest-news';
import NotFoundPage from './pages/404';
import AboutPage from './pages/about';
import CategoryPage from './pages/category';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />

        <Route path='/' element={<HomePage />} />
        <Route path='/latest-news' element={<LatestNewsPage />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/:category' element={<CategoryPage />} />
        <Route path='/:category/:slug' element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
