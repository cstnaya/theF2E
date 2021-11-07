import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(term);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" value={term} onChange={(e) => setTerm(e.target.value)} />
        </form>
    );
};

export default SearchBar;