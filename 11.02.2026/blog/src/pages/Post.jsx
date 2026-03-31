import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const fetchFullPostData = async (id) => {
    const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await postRes.json()

    const [userRes, commentsRes] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`),
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    ])

    return {
        post,
        user: await userRes.json(),
        comments: await commentsRes.json()
    }
}

function Post() {
    const { id } = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ['post', id],
        queryFn: () => fetchFullPostData(id),
    })

    if (isLoading) return <div className="container">Ładowanie treści...</div>
    if (error) return <div className="container">Błąd: {error.message}</div>

    const { post, user, comments } = data

    return (
        <div className="container post-detail">
            <header>
                <h1>{post.title}</h1>
                <div className="meta">Autor: {user.name} ({user.email})</div>
            </header>

            <div className="content">
                <p>{post.body}</p>
            </div>

            <section className="comments-section">
                <h2>Komentarze ({comments.length})</h2>
                {comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <span>{comment.email}</span>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Post