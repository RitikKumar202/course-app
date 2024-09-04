import React from 'react';
import '../styles/searchBar.css';
import { Link } from 'react-router-dom';

const SearchBar = ({ setSearchTerm }) => {
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search courses by name or instructor...."
                onChange={handleChange}
            />
            <Link to="/dashboard">Dashboard</Link>
        </div>
    );
};

export default SearchBar;
