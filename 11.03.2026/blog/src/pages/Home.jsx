import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../api';

function Home() {
    const { data: posts, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

    if (isLoading) return <div className="container">Ładowanie...</div>;
    if (error) return <div className="container">{error.message}</div>;

    return (
        <div className="container">
            <h1>Blog</h1>
            <div className="posts-grid">
                {posts.map(post => (
                    <article key={post.id} className="post-card">
                        <h3>{post.title}</h3>
                        <Link to={`/post/${post.id}`} className="read-more">Czytaj</Link>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Home;