import Header from './components/Header.js'
import Footer from './components/Footer.js'
import './App.css';
import CampsitesList from './features/campsites/CampsiteList.js'
import { CAMPSITES } from './app/shared/CAMPSITES.js';
import {Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage.js';
import ContactPage from './pages/ContactPage.js';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage.js'

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route pat='directory' element={<CampsitesDirectoryPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
