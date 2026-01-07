import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Categories from './pages/Categories';
import Navigation from './components/Navigation';
import Header from './components/Header';

import './styles/main.scss';

function App() {
    return (
        <Router>
            <div className="app">
                <Header /> {/* Nagłówek strony */}
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/categories" element={<Categories />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
