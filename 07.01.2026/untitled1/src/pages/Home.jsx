import React, { useState } from 'react';
import PostCard from '../components/PostCard';

function Home() {
    const [posts] = useState([
        {
            id: 1,
            title: 'Pierwszy post',
            excerpt: 'To jest fragment pierwszego posta, który może być interesujący...',
            content: 'Pełna treść pierwszego posta...',
            category: 'React',
        },
        {
            id: 2,
            title: 'Drugi post',
            excerpt: 'W tym poście mówimy o tym, jak tworzyć aplikacje w React...',
            content: 'Pełna treść drugiego posta...',
            category: 'JavaScript',
        },
        {
            id: 3,
            title: 'Trzeci post',
            excerpt: 'W tym poście omawiamy najnowsze zmiany w języku JavaScript...',
            content: 'Pełna treść trzeciego posta...',
            category: 'Web Development',
        },
    ]);

    return (
        <div className="home">
            <h1 className="home-title">Witamy na blogu!</h1>
            <div className="posts-list">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Home;
