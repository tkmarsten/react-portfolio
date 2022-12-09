import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Home from './Home'
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
