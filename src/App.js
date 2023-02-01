import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation, Footer } from './components';
import {
  Home,
  Publication,
  Publications,
  About,
  Contact,
  NotFound,
} from './pages';

import { CreatePublication, UpdatePublication } from './pages/admin';

function App() {
  return (
    <div className='bg-white flex flex-col min-h-screen'>
      <Router>
        <Navigation />
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/publication/:id' element={<Publication />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          {/* Private Routes */}
          <Route path='/admin/new' element={<CreatePublication />} />
          <Route path='/admin/edit/:id' element={<UpdatePublication />} />

          {/* 404 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
