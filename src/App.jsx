import './App.css'
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<CountryDetails />} />
      </Routes>
    </>
  )
}

export default App