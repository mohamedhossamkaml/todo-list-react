import { } from 'react'
import AppRouter from './router/routes';
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-baseLight dark:bg-baseDark p-6">
      <Navbar />
      <Home />
      <AppRouter />
    </div>
  )
}

export default App
