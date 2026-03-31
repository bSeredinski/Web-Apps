import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Post from './pages/Post';

import './styles/main.scss';

function App() {
    return (
        <div className="app-wrapper">
            <Navbar />

            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/post/:id" element={<Post />} />
                </Routes>
            </main>

            <footer>
                <p>&copy; 2024 Mój Blog</p>
            </footer>
        </div>
    );
}

export default App;