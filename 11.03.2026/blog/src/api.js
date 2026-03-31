const API_URL = 'http://localhost:5000';

export const fetchPosts = async () => {
    const res = await fetch(`${API_URL}/posts`);
    if (!res.ok) throw new Error('Błąd pobierania postów');
    return res.json();
};

export const fetchPostDetails = async (id) => {
    const res = await fetch(`${API_URL}/posts/${id}`);
    if (!res.ok) throw new Error('Błąd pobierania posta');
    return res.json();
};

export const addComment = async ({ postId, commentData }) => {
    const res = await fetch(`${API_URL}/posts/${postId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(commentData),
    });
    if (!res.ok) throw new Error('Błąd dodawania komentarza');
    return res.json();
};