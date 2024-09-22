import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from'./pages/Home'
import Contato from'./pages/Contato'
import Empresa from'./pages/Empresa'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

function App() {
  return (
    <Router className = "">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
