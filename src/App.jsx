import './App.scss';
import './components/Error/Error.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Logements from './components/Logements/Logements.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logements/:id" element={<Logements />} />
          <Route path="*" element={<ErrorPage />} />  {/* Route de fallback si page inexistante */}
          <Route path="/error" element={<ErrorPage />} />  {/* Route pour la page d'erreur */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
