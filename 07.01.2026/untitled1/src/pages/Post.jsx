import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetail from '../components/PostDetail';

function Post() {
    const { id } = useParams();

    const posts = [
        {
            id: 1,
            title: 'Pierwszy post',
            excerpt: 'To jest fragment pierwszego posta...',
            content: 'Pełna treść pierwszego posta...',
            category: 'React',
        },
        {
            id: 2,
            title: 'Drugi post',
            excerpt: 'Fragment drugiego posta...',
            content: 'Pełna treść drugiego posta...',
            category: 'JavaScript',
        },
        {
            id: 3,
            title: 'Trzeci post',
            excerpt: 'Fragment trzeciego posta...',
            content: 'Pełna treść trzeciego posta...',
            category: 'Web Development',
        },
    ];

    const post = posts.find(p => p.id === parseInt(id));

    if (!post) return <div>Nie znaleziono posta</div>;

    return (
        <div className="post">
            <PostDetail post={post} />
        </div>
    );
}

export default Post;
