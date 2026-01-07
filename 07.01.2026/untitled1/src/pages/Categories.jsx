import React from 'react';
import CategoryList from '../components/CategoryList';

function Categories() {
    const categories = [
        { id: 1, name: 'React' },
        { id: 2, name: 'JavaScript' },
        { id: 3, name: 'Web Development' },
    ];

    return (
        <div className="categories">
            <h1 className="categories-title">Kategorie</h1>
            <CategoryList categories={categories} />
        </div>
    );
}

export default Categories;
