import { } from 'react'
import AppRouter from './router/routes';
import Navbar from './components/Navbar';
import './App.css'
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App relative  ">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <AppRouter />

    </div>
  )
}

export default App
