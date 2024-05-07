import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage'
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage.js';
import { fetchCampsites } from './features/campsites/campsitesSlice.js';
import { fetchPartners } from './features/partners/partnersSlice.js';
import { fetchPromotions } from './features/promotions/promotionsSlice.js';
import { fetchComments } from './features/comments/commentsSlice.js';




function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
        dispatch(fetchComments());
    }, [dispatch]);
    
    
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
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
