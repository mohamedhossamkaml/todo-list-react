
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Work from '../Pages/Work';
import Study from '../Pages/Study';
import Personal from '../Pages/Personal';
import Home from '../Pages/Home';

import CategoryPage from '../Pages/CategoryPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/category/:id" element={<CategoryPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/study" element={<Study />} />
      <Route path="/personal" element={<Personal />} />
    </Routes>
  );
}