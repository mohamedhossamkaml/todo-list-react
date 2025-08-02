
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Work from '../Pages/Work';
// import Study from '../Pages/Study';
// import Personal from '../Pages/Personal';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/work" element={<Work />} />
        {/* <Route path="/study" element={<Study />} /> */}
        {/* <Route path="/personal" element={<Personal />} /> */}
      </Routes>
    </BrowserRouter>
  );
}