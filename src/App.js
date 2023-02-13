import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation, Footer } from './components';
import {
  Home,
  Publications,
  Publication,
  AnnualReports,
  Contact,
  Authors,
  Author,
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
          <Route path='/publications' element={<Publications />} />
          <Route path='/publications/:id' element={<Publication />} />
          <Route path='/annual-reports' element={<AnnualReports />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/authors' element={<Authors />} />
          <Route path='/authors/:id' element={<Author />} />

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
