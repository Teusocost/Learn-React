import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'
import Company from './components/pages/Company'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/company">company</Link>
        <Link to="/contact">contact</Link>
        <Link to="/newproject">newproject</Link>
      </div>
      <Container customClass = "min-height">
        <Routes>
          <Route exact path="/" element = {<Home />}/>
          <Route exact path="/company" element = {<Company />} />
          <Route exact path="/contact" element = {<Contact />} />
          <Route exact path="/newproject" element = {<NewProject />} />
        </Routes>
      </Container>
      <footer>Footer</footer>
    </Router>
  );
}

export default App;
