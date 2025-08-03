
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Work from '../pages/Work';
import Study from '../pages/Study';
import Personal from '../pages/Personal';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/study" element={<Study />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </BrowserRouter>
  );
}