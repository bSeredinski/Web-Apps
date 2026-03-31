import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <h1>blog.</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/categories">Categories</Link>
            </div>
        </nav>
    )
}

export default Navbar