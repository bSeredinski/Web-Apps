import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

function Home() {
    const { data: posts, isLoading, error } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    })

    if (isLoading) return <div className="container">Ładowanie postów...</div>
    if (error) return <div className="container">Błąd: {error.message}</div>

    return (
        <div className="container">
            <h1>Najnowsze wpisy</h1>
            <div className="posts-grid">
                {posts.slice(0, 12).map(post => (
                    <article key={post.id} className="post-card">
                        <h3>{post.title}</h3>
                        <p>{post.body.substring(0, 100)}...</p>
                        <Link to={`/post/${post.id}`} className="read-more">Czytaj więcej</Link>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Home