import React from 'react';

function CategoryList({ categories }) {
    return (
        <ul className="categories-list">
            {categories.map(category => (
                <li key={category.id} className="category-item">{category.name}</li>
            ))}
        </ul>
    );
}

export default CategoryList;
