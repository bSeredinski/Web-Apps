import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchPostDetails, addComment } from '../api';

function Post() {
    const { id } = useParams();
    const queryClient = useQueryClient();
    const [text, setText] = useState('');

    const { data, isLoading, error } = useQuery({
        queryKey: ['post', id],
        queryFn: () => fetchPostDetails(id),
    });

    const mutation = useMutation({
        mutationFn: (newComment) => addComment({ postId: id, commentData: newComment }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['post', id] });
            setText('');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        mutation.mutate({ body: text, date: new Date().toISOString() });
    };

    if (isLoading) return <div className="container">Ładowanie...</div>;
    if (error) return <div className="container">Błąd: {error.message}</div>;

    const { post, comments } = data;

    return (
        <div className="container post-detail">
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <section className="comments-section">
                <h2>Komentarze ({comments.length})</h2>

                <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Dodaj komentarz..."
          />
                    <button type="submit" disabled={mutation.isPending}>
                        {mutation.isPending ? 'Wysyłanie...' : 'Dodaj'}
                    </button>
                </form>

                {comments.map((c, index) => (
                    <div key={index} className="comment">
                        <p>{c.body}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Post;