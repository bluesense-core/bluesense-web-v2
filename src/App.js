import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './ui/Home';
import Services from './ui/Services';

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
