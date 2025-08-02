import { } from 'react'
import AppRouter from './router/routes';
import Navbar from './components/Navbar';
import './App.css'

function App() {

  return (
    <div className="App relative ">
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
