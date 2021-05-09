import React from 'react';

export const Search = ({ onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(event.target.elements.filter.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='filter' />
            <button>search</button>
        </form>
    )
}

export default Search;