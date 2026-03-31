import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data.slice(0, 10)));
    }, []);

    return (
        <div className="post-list">
            <h1>Najnowsze wpisy</h1>
            <div className="posts-grid">
                {posts.map(post => (
                    <article key={post.id} className="post-card">
                        <h3>{post.title}</h3>
                        <p>{post.body.substring(0, 100)}...</p>
                        <Link to={`/post/${post.id}`}>Czytaj więcej</Link>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Home;