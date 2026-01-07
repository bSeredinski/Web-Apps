import React from 'react';

function PostDetail({ post }) {
    return (
        <div className="post-detail">
            <h1 className="post-detail-title">{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;
