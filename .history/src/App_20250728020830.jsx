import { } from 'react'
import AppRouter from './router/routes';
import Navbar from './components/Navbar';
import './App.css'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App relative  ">
        <Navbar />
    </BrowserRouter>
    </div >
    <AppRouter />
  )
}

export default App
