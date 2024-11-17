import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ExamBoards from './pages/ExamBoards';
import HomeSchool from './pages/HomeSchool';
import Career from './pages/Career';
import Contact from './pages/Contact';
import BookTrial from './pages/BookTrial';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/exam-boards" element={<ExamBoards />} />
            <Route path="/home-school" element={<HomeSchool />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-trial" element={<BookTrial />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;