import Header from './components/Header.js'
import Footer from './components/Footer.js'
import './App.css';
import CampsitesList from './features/campsites/CampsiteList.js'
import { CAMPSITES } from './app/shared/CAMPSITES.js';

function App() {
    return (
        <div className='App'>
            <Header />
            <CampsitesList />
            <Footer />
        </div>
    );
}

export default App;
