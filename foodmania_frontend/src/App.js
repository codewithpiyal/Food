import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom'
import DetailsPage from './Components/DetailsPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:slug' element={<DetailsPage />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
