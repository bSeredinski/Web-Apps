import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(postData => {
                setPost(postData);
                return fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
            })
            .then(res => res.json())
            .then(userData => setUser(userData));

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => res.json())
            .then(commentData => setComments(commentData));
    }, [id]);

    if (!post || !user) return <p>Ładowanie...</p>;

    return (
        <div className="post-page">
            <article>
                <h1>{post.title}</h1>
                <p className="author">Autor: <strong>{user.name}</strong> ({user.email})</p>
                <div className="post-body">{post.body}</div>
            </article>

            <section className="comments">
                <h2>Komentarze ({comments.length})</h2>
                {comments.map(comment => (
                    <div key={comment.id} className="comment">
                        <h4>{comment.email} pisze:</h4>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Post;