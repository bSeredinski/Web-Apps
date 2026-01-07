import React from 'react';
import { Link } from 'react-router-dom';

function PostCard({ post }) {
    return (
        <div className="post-card">
            <h2><Link to={`/post/${post.id}`} className="post-card-title">{post.title}</Link></h2>
            <p className="post-card-excerpt">{post.excerpt}</p>
        </div>
    );
}

export default PostCard;
