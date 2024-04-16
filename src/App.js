import Header from './components/Header.js'
import Footer from './components/Footer.js'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage'
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage.js';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route pat='directory' element={<CampsitesDirectoryPage />} />
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />}
                />
                <Route path='about' element={<AboutPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
