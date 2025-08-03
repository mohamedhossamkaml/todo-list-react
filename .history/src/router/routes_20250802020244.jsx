
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import CategoryPage from '../Pages/CategoryPage';
import CategoriesList from '../Pages/CategoriesList';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/category/home" element={<Home />} />
      <Route path="/categories" element={<CategoriesList />} />
    </Routes>
  );
}