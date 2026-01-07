import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="nav-list">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/categories" className="nav-link">Categories</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
