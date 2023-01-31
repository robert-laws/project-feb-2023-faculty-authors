import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation, Footer } from './components';
import { Home, Publications, About, Contact, NotFound } from './pages';

function App() {
  return (
    <div className='bg-white flex flex-col min-h-screen'>
      <Router>
        <Navigation />
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          {/* Private Routes */}

          {/* 404 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
