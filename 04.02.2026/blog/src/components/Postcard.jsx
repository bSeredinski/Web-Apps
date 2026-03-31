import { Link } from "react-router-dom"

function PostCard({ title, id }) {
    return (
        <div className="post-card">
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>Czytaj więcej</Link>
        </div>
    )
}

export default PostCard